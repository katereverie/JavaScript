// access elements from HTML file
const playlistSongs = document.getElementById("playlist-songs");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");
const shuffleButton = document.getElementById("shuffle");

// create an array to store all songs as objects in it
const allSongs = [
  {
    id: 0,
    title: "Padam Padam",
    artist: "Kylie Minogue",
    duration: "2:47",
    src:"https://ia800508.us.archive.org/21/items/padam-padam/Padam%20Padam.mp3"
  },
  {
    id: 1,
    title: "Deeper and Deeper",
    artist: "Madonna",
    duration: "5:34",
    src: "https://ia802503.us.archive.org/11/items/03.-madonna-holiday/33.MADONNA%20-%20Deeper%20And%20Deeper.mp3",
  },
  {
    id: 2,
    title: "7 rings",
    artist: "Ariana Grande",
    duration: "2:59",
    src: "https://ia801903.us.archive.org/18/items/7-rings-explicit-ariana-grande/7%20rings%20Explicit%20-%20Ariana%20Grande.mp3",
  },
  {
    id: 3,
    title: "Total Inferioridad",
    artist: "Rafa Spunky",
    duration: "6:05",
    src: "",
  },
  {
    id: 4,
    title: "HOME",
    artist: "JOHJI",
    duration: "4:49",
    src: "",
  },
];

// use Web Audio API to play songs on the web
// this creates a new HTML5 audio element
const audio = new Audio();
// a music player to store information of the songs
// and create a songs property with allSongs converted into an array as the value
// currentSong handles the currentSong's information
// songCurrentTime handles its playback time
let userData = {
  songs: [...allSongs],
  currentSong: null,
  songCurrentTime: 0,
};

// define a func to play the displayed songs
const playSong = (id) => {
  const song = userData?.songs.find((song) => song.id === id);
  audio.src = song.src;
  audio.title = song.title;

  if (userData?.currentSong === null || userData?.currentSong.id !== song.id) {
    audio.currentTime = 0;
  } else {
    audio.currentTime = userData?.songCurrentTime;
  }
  userData.currentSong = song;
  playButton.classList.add("playing");

  highlightCurrentSong();
  setPlayerDisplay();
  setPlayButtonAccessibleText();
  audio.play();
};

// define a pause func
const pauseSong = () => {
  // store current time of the song when paused
  userData.songCurrentTime = audio.currentTime;
  // since the current song is paused, it should be removed from the playing class
  playButton.classList.remove("playing");
  audio.pause();
};

// define a playNextSong func 
const playNextSong = () => {
  if (userData?.currentSong === null) {
    playSong(userData?.songs[0].id);
  } else {
    const currentSongIndex = getCurrentSongIndex();
    const nextSong = userData?.songs[currentSongIndex + 1];
    playSong(nextSong.id);
  }
};

// define a func to play previous song
const playPreviousSong = () => {
  if (userData?.currentSong === null) {
    return;
  } else {
    const currentSongIndex = getCurrentSongIndex();
    const previousSong = userData?.songs[currentSongIndex - 1];
    playSong(previousSong.id);
  }
};
// define a func to shuffle playlist 
const shuffle = () => {
  userData?.songs.sort(() => Math.random() - 0.5);
  userData.currentSong = null;
  userData.songCurrentTime = 0;

  renderSongs(userData?.songs);
  pauseSong();
  setPlayerDisplay();
  setPlayButtonAccessibleText();
};

// define a func to delete songs from playlist
const deleteSong = (id) => {
    // if the currently playing song is the song to be deleted, play the next song on the play list
  if (userData?.currentSong?.id === id) {
    userData.currentSong = null;
    userData.songCurrentTime = 0;
    pauseSong();
    setPlayerDisplay();
  }

  userData.songs = userData?.songs.filter((song) => song.id !== id);
  renderSongs(userData?.songs);
  highlightCurrentSong();
  setPlayButtonAccessibleText();

  // check if the play list is empty; if empty, reset userData object
  if (userData?.songs.length === 0) {
    const resetButton = document.createElement("button");
    const resetText = document.createTextNode("Reset Playlist");
    resetButton.id = "reset";
    resetButton.ariaLabel = "Rest playlist";
    resetButton.appendChild(resetText);
    playlistSongs.appendChild(resetButton);

    resetButton.addEventListener("click", () => {
      userData.songs = [...allSongs];
      renderSongs(sortSongs());
      setPlayButtonAccessibleText();
      resetButton.remove();
    });
  }
};
// define a func to display infos
const setPlayerDisplay = () => {
  const playingSong = document.getElementById("player-song-title");
  const songArtist = document.getElementById("player-song-artist");
  const currentTitle = userData?.currentSong?.title;
  const currentArtist = userData?.currentSong?.artist;

  playingSong.textContent = currentTitle ? currentTitle : "";
  songArtist.textContent = currentArtist ? currentArtist : "";
};
// define a func to highlight currently playing song
// this func really got me ...
const highlightCurrentSong = () => {
  // why playlistSongs.querySelectorAll failed? 
  const playlistSongElements = document.querySelectorAll('.playlist-song');
  const sontToHighlight = document.getElementById(`song-${userData?.currentSong?.id}`);
  playlistSongElements.forEach((songEl) => {
    songEl.removeAttribute("aria-current");
  });
  
  if (sontToHighlight) {
    sontToHighlight.setAttribute("aria-current", "true");
  }
};
// create a function to display the songs in the UI
const renderSongs = (array) => {
  const songsHTML = array.map((song) => {
    return `
    <li id="song-${song.id}" class="playlist-song">
      <button class="playlist-song-info" onclick="playSong(${song.id})">
          <span class="playlist-song-title">${song.title}</span>
          <span class="playlist-song-artist">${song.artist}</span>
          <span class="playlist-song-duration">${song.duration}</span>
      </button>
      <button class="playlist-song-delete" aria-label="Delete ${song.title}" onclick="deleteSong(${song.id})">
          <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#4d4d62"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/>
          </svg>
      </button>
    </li>
    `;
  }).join("");
  // 如果join方法里没有参数的话, 就会按array的元素来连接, 这样每个元素之间会出现一个逗号
  playlistSongs.innerHTML = songsHTML;
};
//  define func to display info of the song when clicking play
const setPlayButtonAccessibleText = () => {
  const song = userData?.currentSong || userData?.songs[0];
  // step 68, i am very confused 
  playButton.setAttribute(
    "aria-label", 
    song?.title ? `Play ${song.title}` : "Play"
  );
};
// define func to get the index of the current song
const getCurrentSongIndex = () => {
  return userData?.songs.indexOf(userData?.currentSong);
};

// add functionality to the playbutton
playButton.addEventListener("click", () => {
  if (!userData?.currentSong) {
    playSong(userData?.songs[0].id);
  } else {
    playSong(userData?.currentSong.id);
  }
});

// make the pause button interactive
pauseButton.addEventListener("click", pauseSong);
// make the play next button interactive
nextButton.addEventListener("click", playNextSong);
// make the play previous button interactive
previousButton.addEventListener("click", playPreviousSong);
// make the shuffle button interactive
shuffleButton.addEventListener("click", shuffle)
// make sure if the song ends, the next song plays
audio.addEventListener("ended", () => {
  const currentSongIndex = getCurrentSongIndex();
  const nextSongExists = currentSongIndex < userData.songs.length -1 ? true: false;
  if (nextSongExists) {
    playNextSong();
  } else {
    userData.currentSong = null;
    userData.songCurrentTime = 0;
    pauseSong();
    setPlayerDisplay();
    highlightCurrentSong();
    setPlayButtonAccessibleText();
  }
});

// create an arror function to sort the song list in alphabetical order by title
const sortSongs = () => {
  userData?.songs.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }

    if (a.title > b.title) {
      return 1;
    }

    return 0;
    
  });

  return userData?.songs;
};
// call renderSongs func to render the stored songs in the playlist
// ? will throws "null or undefined" if accessed nested properties aren't defined
renderSongs(sortSongs());
setPlayButtonAccessibleText();

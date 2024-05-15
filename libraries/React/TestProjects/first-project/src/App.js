
import { useEffect, useState} from 'react';
import SearchIcon from './search.svg'
import MovieCard from './MovieCard';
import './App.css';

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=ed2fed46";

const App = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  

  const searchMovies = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`);
    const data = await res.json();

    setMovies(data.Search);
  }

  const handleKeyPress = (e) => {
    if(e.key === "Enter") {
      searchMovies(searchTerm);
    }
  }
  
  // we only want the object value with the key Search
  useEffect(() => {
    searchMovies('Batman');
  }, [])

  return (
    <div className='app'>
      <h1>MovieLand</h1>
      <div className='search'>
        <input 
          placeholder='search for movies'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <img 
          src={SearchIcon} 
          alt="search-icon"
          onClick={() => searchMovies(searchTerm)}
          />
      </div>

      {
        movies?.length > 0
        ? (
          <div className='container'>
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ) )}
          </div>
        ) : (
          <div className='empty'>
            <h2>No movies found</h2>
          </div>
        )
      }
      
    </div>
  )
}

export default App
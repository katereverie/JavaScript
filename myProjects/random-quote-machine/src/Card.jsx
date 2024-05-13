import profilePic from './assets/karl-marx.png'

function Card() {
  return(
    <div className="card">
      <img className="profile-picture" src={profilePic} alt="author profile"></img>
      <h2 className="author-name">Karl Marx</h2>
      <p className="author-title">German Philosopher/Economist/Scientist</p>
    </div>
  );
}

export default Card
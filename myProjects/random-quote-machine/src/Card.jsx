import profilePic from './assets/karl-marx.png'
import AuthorInfo from './AuthorInfo.jsx'

function Card(props) {
  return(
    <div className="card">
      <img className="profile-picture" src={profilePic} alt="author profile"></img>
      <AuthorInfo name={props.authorName} title={props.title}/>
    </div>
  );
}

export default Card
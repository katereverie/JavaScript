import profilePic from './assets/karl-marx.png'
import AuthorInfo from './AuthorInfo.jsx'
import PropTypes from 'prop-types'

function Card(props) {
  return(
    <div className="card">
      <img className="profile-picture" src={profilePic} alt="author profile"></img>
      <AuthorInfo authorName={props.authorName} authorTitle={props.authorTitle}/>
    </div>
  );
}

Card.defaultProps = {
  authorName: "unknown",
  authorTitle: "unknown"
}
Card.propTypes = {
  authorName: PropTypes.string,
  authorTitle: PropTypes.string
}

export default Card
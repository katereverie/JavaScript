import PropTypes from 'prop-types'

const AuthorInfo = (props) => {
  return(
    <div className='author-card'>
      <p className="author-name">{props.authorName}</p>
      <p className="author-title">{props.authorTitle}</p>
    </div>
  );
}

AuthorInfo.propTypes = {
  authorName: PropTypes.string,
  authorTitle: PropTypes.string,
}

AuthorInfo.defaultProps = {
  name: "Guest",
  title: "unknown",
}

export default AuthorInfo
import PropTypes from 'prop-types'

const AuthorInfo = (props) => {
  return(
    <div className='author-card'>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Title: {props.title}</p>
      <p>Alive: {props.isAlive ? "Yes" : "No"}</p>
    </ div>
  );
}

AuthorInfo.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  title: PropTypes.string,
  isAlive: PropTypes.boolean
}
AuthorInfo.defaultProps = {
  name: "Guest",
  title: "unknown",
}

export default AuthorInfo
import PropTypes from 'prop-types'
function Author(props) {
  return(
    <div className='author-card'>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Title: {props.title}</p>
      <p>Alive: {props.isAlive ? "Yes" : "No"}</p>
    </ div>
  );
}

Author.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  title: PropTypes.string,
  isAlive: PropTypes.boolean
}
Author.defaultProps = {
  name: "Guest",
  age: 0,
  title: "unknown",
  isAlive: false
}

export default Author
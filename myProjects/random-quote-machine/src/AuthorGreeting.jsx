import PropTypes from 'prop-types'

const AuthorGreeting = (props) => {
    const welcomeMessage =  <h2 className="success-message">
                              Successfully got a quote from <em>{props.name}</em>
                            </h2>;
    const quoteStatus = <h2 className="prompt-message"> Not quoted</h2>;
    
    return (props.isQuoted ? welcomeMessage: quoteStatus);
}

AuthorGreeting.propTypes = {
  isQuoted: PropTypes.boolean,
  name: PropTypes.string,
}

export default AuthorGreeting
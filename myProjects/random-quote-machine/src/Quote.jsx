import Card from './Card.jsx'
import PropTypes from 'prop-types'

const Quote = (props) => {

  const quote2 = "Religion is the sign of the oppressed creature, the heart of a heartless world, and the sould of soulless conditions. It is the opium of the people."

  return(
    <section className="quote-section">
      <Card authorName={props.authorName} authorTitle={props.authorTitle}/>
      <div className="quote-wrapper">
        {quote2}
      </div>
    </section>

  );
}

Quote.defaultProps = {
  authorname: "Unknown",
  authorTitle: "Unknown"
}
Quote.propTypes = {
  authorName: PropTypes.string,
  authorTitle: PropTypes.string
}

export default Quote
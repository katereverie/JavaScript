import Card from './Card.jsx'

const Quote = () => {

  const quote1 = "Reason has always existed, but not always in a reasonable form."
  const quote2 = "Religion is the sign of the oppressed creature, the heart of a heartless wordl, and the sould of soulless conditions. It is the opium of the people."

  return(
    <section className="quote-section">
      <Card authorName={"Karl Marx"} authorTitle={"Economics Theorist/Thinker/Revolutionary"}/>
      <ul>
        <li>{quote1}</li>
        <li>{quote2}</li>
      </ul>
    </section>

  );
}

export default Quote
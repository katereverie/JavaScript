import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Quote from './Quote.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'
import Author from './Author.jsx'

function App() {

  return(
    <>
      <Button />
      <Header />
      <Author name={"Karl Marx"} age={64} title="German Philosopher/Economist/Scientist" isAlive={false}/>
      <Author name={"Friedrich Nietzsche"} age={55} title="German Philosopher/Philologist" isAlive={false}/>
      <Author name={"Harry Frankfurt"} age={94} title="American Philosopher" isAlive={false}/>
      <Author />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Quote />
      <Footer />
    </>
  ); 
}

export default App

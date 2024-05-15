import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Quote from './Quote.jsx'

import History from './History.jsx'

function App() {

  return(
    <>
      <Header />
      <Quote authorName={"Karl Marx"} authorTitle = {"Economics Theorist/Thinker/Revolutionary"}/>
      <Quote authorName={"Friedrich Nietzsche"} authorTitle = {"Philosopher/Philologist"}/>
      <Quote authorName={"Harry Frankfurt"} authorTitle= {"Philosopher"}/>
      <History />
      <Footer />
    </>
  ); 
}

export default App
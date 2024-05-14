import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Quote from './Quote.jsx'

import History from './History.jsx'

function App() {

  return(
    <>
      <Header />
      <Quote authorName={"Karl Marx"}/>
      <Quote authorName={"Friedrich Nietzsche"}/>
      <Quote authorName={"Harry Frankfurt"}/>
      <History />
      <Footer />
    </>
  ); 
}

export default App
import GetQuoteBtn from './QuoteButton.jsx'
import TweetBtn from './TweetButton.jsx';
function Header() {
  
  return(
    <header>
      <h1>Random Quote Machine</h1>
      <nav>
        <ul className="nav-bar-list">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contacts</a></li>
        </ul>
      </nav>
      <GetQuoteBtn />
      <TweetBtn />
    </header>
  )
}

export default Header;
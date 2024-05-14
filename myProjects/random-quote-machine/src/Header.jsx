import GetQuoteBtn from './QuoteButton.jsx'
import SaveBtn from './SaveButton.jsx';
import TweetBtn from './TweetButton.jsx';
function Header() {

  const btnSectionStyles = {
    backgroundColor: "gray",
    margin: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  };

  return(
    <header>
      <h1 id='head-title'>Random Quote Machine</h1>
      <nav>
        <ul className="nav-bar-list">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contacts</a></li>
        </ul>
      </nav>
      <div style={btnSectionStyles}>
        <GetQuoteBtn />
        <SaveBtn />
        <TweetBtn />
      </div>

    </header>
  )
}

export default Header;
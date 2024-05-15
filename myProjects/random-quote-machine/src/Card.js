import X_icon from "./icons/X_icon.png";

const Card = () => {

  const API_URL = "https://api.quotable.io/random";
  
  const updateQuote = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(data);

    } catch (error) {
      console.log(`Oops...there is an error fetching data: ${error}`)
    }
  }

  return (
    <div id="quote-box">
      <div className="quote-wrapper">
        <p id="text">My Quote</p>
        <span id="author">Author of Quote</span>
      </div>
      <div className="button-wrapper">
      <button id="new-quote" onClick={updateQuote}>New Quote</button>
      <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">
        <img src={X_icon} alt="icon"/>
      </a>
    </div>
    </div>
  );
}

export default Card
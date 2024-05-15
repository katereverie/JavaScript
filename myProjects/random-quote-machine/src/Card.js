import { useState, useEffect } from "react"
import X_icon from "./icons/X_icon.png";

const Card = () => {

  const [data, setData] = useState("getting a quote");

  const API_URL = "https://api.quotable.io/random";
  
  const updateQuote = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log("Here is the parsed data:", data);
      setData(data);
    } catch (error) {
      console.log(`Oops...there is an error fetching data: ${error}`)
    }
  }
  
  const saveQuote = () => {
    // const currentQuote = data.content;
    // console.log(currentQuote);
    const history = document.querySelector(".saved-quotes-wrapper");
    history.innerHTML += `
      <p id="text">${data.content}</p>
      <span id="author">--- ${data.author}</span>
    `;
  }

  useEffect(() => {
    updateQuote();
  }, [])

  if (!data) return null;

  const handleTweetClick = (socialMedia) => (e) => {
    e.preventDefault();
    const shareText = `"${data.content}" - ${data.author}`;
    let shareUrl;
    if (socialMedia === "twitter") {
      shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
    } 
    window.open(shareUrl, '_blank');
  }

  return (
    <div id="quote-box">
      <div className="quote-wrapper">
        <p id="text">{data.content}</p>
        <span id="author">--- {data.author}</span>
      </div>
      <div className="button-wrapper">
        <button id="new-quote" onClick={updateQuote}>New Quote</button>
        <button id="save-quote" onClick={saveQuote}>Save</button>
        <a 
          id="tweet-quote"
          href="twitter.com/intent/tweet" 
          target="_blank"
          title="Click to tweet the quote!"
          rel="noopener noreferrer"
          >
          <img src={X_icon} alt="icon" onClick={handleTweetClick("twitter")} style={{ cursor: "pointer" }}/>
        </a>  
    </div>
    </div>
  );
}

export default Card
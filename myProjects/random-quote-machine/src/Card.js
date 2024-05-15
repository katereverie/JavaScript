import { useState, useEffect } from "react"
import X_icon from "./icons/X_icon.png";
import Facebook_Logo from "./icons/Facebook_Logo_2023.png"

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
    } else if (socialMedia === "facebook") {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?text=<URL_ENCODED_LINK>
      ?text=${encodeURIComponent(shareText)}`;
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
        <a 
          id="tweet-quote"
          href="twitter.com/intent/tweet" 
          target="_blank"
          title="Click to tweet the quote!"
          rel="noopener noreferrer"
          >
          <img src={X_icon} alt="icon" onClick={handleTweetClick("twitter")} style={{ cursor: "pointer" }}/>
        </a>
        <a 
          id="facebook-quote"
          href="https://www.facebook.com/sharer/sharer.php>"
          title="Click to share the quote on Facebook!"
          target="_blank"
          rel="noopener noreferrer"
          >
          <img src={Facebook_Logo} alt="icon" onClick={handleTweetClick("facebook")} style={{ cursor: "pointer" }}/>
        </a>
        
    </div>
    </div>
  );
}

export default Card
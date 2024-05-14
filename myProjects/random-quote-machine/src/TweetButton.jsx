
const TweetBtn = () => {
  const tweetBtnStyles = {
    maxWidth: "200px",
    backgroundColor: "black",
    border: "10px solid transparent",
    borderRadius: "8px",
    color: "white",
    cursor: "pointer",
    padding: "0.6em 1.2em",
    fontSize: "1em",
    fontWeight: "600px",
    transition: "margin 0.5s, backgroundColor 0.5s",
  };

  return (
    <button id="tweet-btn" style={tweetBtnStyles}>Tweet It!</button>
  );
}

export default TweetBtn
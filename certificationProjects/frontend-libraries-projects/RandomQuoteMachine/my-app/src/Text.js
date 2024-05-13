import logo from './icons/logo-x.png';

function Text() {

  return (
    <div id="text-area">
    <p id="text">
      Text goes here
    </p>
    <label for="text-area" id="author-name">
      author's name goes here
    </label>
    <div id="click-area">
      <button id="new-quote">New Quote</button>
      <a id="tweet-quote" href="twitter.com/intent/tweet"><img src={logo} alt="x-icon" /></a>
    </div>
  </div>
  );
  
}

export default Text;

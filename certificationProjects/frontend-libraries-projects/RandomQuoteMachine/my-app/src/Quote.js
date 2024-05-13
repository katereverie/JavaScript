import logo from './icons/logo-x.png';

function Quote(props) {
  console.log(props);

  return (
    <main className="App-main">
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
    </main>
  );
}

export default Quote;
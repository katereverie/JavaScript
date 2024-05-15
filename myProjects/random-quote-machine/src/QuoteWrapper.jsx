import X_icon from './assets/X_icon.png';

const QuoteWrapper = () => {

  console.log(X_icon);

  return(
    <div id="quote-box">
      <div className="text-wrapper">
        <p id="text" className='quote-box-item'>text</p>
        <span id="author" className='quote-box-item'>author</span>
      </div>
      <div className="button-wrapper">
        <button id="new-quote" className='quote-box-item'>get quote</button>
        <a id="tweet-quote" className='quote-box-item' href="twitter.com/intent/tweet" target="_black"><img src={X_icon} alt="icon" /></a>
      </div>
    </div>
  );
}

export default QuoteWrapper
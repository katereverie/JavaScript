import { useState } from "react";
import Card from "./Card";
import Header from "./Header";
import Footer from "./Footer";
import History from "./History";

const App = () => {
  const [history, setHistory] = useState([]);
  const [isHistoryVisible, setIsHistoryVisible] = useState(false);

  const addQuoteToHistory = (quote) => {
    setHistory((prevHistory) => [...prevHistory, quote]);
  }

  const clearHistory = () => {
    setHistory([]);
  }

  const toggleHistory = () => {
    setIsHistoryVisible(!isHistoryVisible);
  }

  return (
    <div className="App">
      <Header />
      <Card 
        addQuoteToHistory={addQuoteToHistory}
        history={history}
        toggleHistory={toggleHistory}
      />
      <History 
        history={history}
        clearHistory={clearHistory}
        isHistoryVisible={isHistoryVisible}
      />
      <Footer />
    </div>
  );
}

export default App
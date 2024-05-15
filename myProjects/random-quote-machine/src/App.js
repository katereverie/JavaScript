import { useState, useEffect } from "react"
import Card from "./Card";

const App = () => {
  const [data, setData] = useState(null);

  async function updateQuote() {
    try {
      const res = await fetch("https://api.quotable.io/random");
      const { statusCode, statusMessage, ...data} = await res.json();
      if (!Response.ok) throw new Error(`${statusCode} ${statusMessage}`);
      setData(data);
    } catch (err) {
      // if the API request failed, log the error to console and update state
      // so that the error will be reflected in the UI.
      console.log(err);
      setData({ content: "Opps ... something went wrong"});
    }
  }

  // Run 'updateQuote' once when component mounts
  useEffect(() => {
    updateQuote();
  }, []);

  // do not render until the first quote is loaded
  if (!data) return null;

  return (
    <div className="App">
      <Card></Card>
    </div>
  );
}

export default App
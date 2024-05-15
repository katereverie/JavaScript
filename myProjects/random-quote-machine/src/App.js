import Card from "./Card";
import Header from "./Header";
import Footer from "./Footer";
import History from "./History";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Card></Card>
      <History />
      <Footer />
    </div>
  );
}

export default App
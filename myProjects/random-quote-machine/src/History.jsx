
const History = () => {

  const savedQuotes = [
    {id: 1, name: "Karl Marx", text: "Religion is the sign of the oppressed creature, the heart of a heartless wordl, and the sould of soulless conditions. It is the opium of the people."},
    {id: 2, name: "Friedrich Nietzsche", text: "He Who has a why to live can bear almost any how."},
  ];

  // savedQuotes.sort((a, b) => a.name.localeCompare(b.name)); // ALPHABETICAL
  // savedQuotes.sort((a, b) => b.name.localeCompare(a.name)); // REVERSE ALPHABETICAL
  // savedQuotes.sort((a, b) => a.text.length() - b.text.length()); // SORT BY QUOTE LENGTH
  // savedQuotes.sort((a, b) => b.text.length() - a.text.length()); // REVERSE SORT BY QUOTE LENGTH

  const listQuotes = savedQuotes.map(quote => 
    <li key={quote.id}>
      {quote.name}: &nbsp;
    </li>);

  // if saveBtn is clicked, save the current quote to history as a list item
  return(
    <ol>
      {}
    </ol>
  );
}

export default History
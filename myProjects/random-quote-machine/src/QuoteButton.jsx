
function GetQuoteBtn() {

  const getQuoteBtnStyles = {
      maxWidth: "200px",
      backgroundColor: "black",
      border: "10px solid transparent",
      borderRadius: "8px",
      color: "white",
      cursor: "pointer",
      fontSize: "1em",
      fontWeight: "600px",
      transition: "margin 0.5s, backgroundColor 0.5s",
    };

  return(
    <button style={getQuoteBtnStyles} >New Quote</button>
  );
}

export default GetQuoteBtn;
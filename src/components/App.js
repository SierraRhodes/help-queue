import React from "react";
import Header from "./Header";
import TicketList from "./TicketList";

function App() {
  const name = "Thato";
  const name2 = "Haley";
  return (
    <React.Fragment>
      <Header/>
      <TicketList/>
      <p><em>Firebase entries not saving!</em></p>
      {/* This is a JSX comment. */}
      <hr/>
    </React.Fragment>
  );
}

export default App;
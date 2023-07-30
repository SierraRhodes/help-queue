import React from "react";
import Header from "./Header";
import TicketList from "./TicketList";

function App() {
  return (
    <React.Fragment>
      <Header/>
      <TicketList/>
      <p><em>Firebase entries not saving!</em></p>
      <hr/>
    </React.Fragment>
  );
}

export default App;
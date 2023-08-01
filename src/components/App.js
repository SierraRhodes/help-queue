import React from "react";
import Header from "./Header";
import TicketList from "./TicketList";
import TicketControl from "./TicketControl";

function App() {
  return (
    <React.Fragment>
      <Header/>
      <TicketList/>
      <TicketControl/>
    </React.Fragment>
  );
}

export default App;
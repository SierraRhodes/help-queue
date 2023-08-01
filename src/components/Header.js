import React from "react";
import ticketsImage from "./../img/tickets.png";

function Header(){
  return (
    <React.Fragment>
    <h1>React</h1>
    <img src={ticketsImage} alt="tickets"/>
    </React.Fragment>
  );
}

export default Header;
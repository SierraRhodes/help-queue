import React from "react";
import ticketsImage from "./../img/tickets.png";


function Header(){
    const myStyledComponentStyles = {
      backgroundColor: '#fcf0f1',
      fontFamily: 'sans-serif',
      paddingTop: '50px'
    }
  return (
    <React.Fragment>
      <div style={myStyledComponentStyles}>
    <h1>React</h1>
    <img src={ticketsImage} alt="tickets"/>
    </div>
    </React.Fragment>
  );
}
export default Header;
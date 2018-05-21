import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Body from "./components/body/Body";


function Footer(props) {
  return <div className="footer" />;
}

class App extends Component {
  render() {
    return (
      <div className="navholder p-0">
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
        </div>
    );
  }
}

export default App;

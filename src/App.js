import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import { Provider } from "react-redux";
import store from "./store";

class Footer extends Component {
  render() {
    return <div className="footer" />;
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="navholder p-0">
          <Header />
          <Body />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
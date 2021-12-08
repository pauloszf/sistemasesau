import React, { Component } from "react";
import Main from "./main";

class App extends Component {
  componentDidMount() {
    console.log(process.env.REACT_APP_FIREBASE_KEY);
  }
  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default App;

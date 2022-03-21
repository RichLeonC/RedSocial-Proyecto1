import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Login } from "./components/login/index";

import Login from "./loginRS/login";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true,
    }
  }
}

render() {
  const { isLogginActive } = this.state;
  return (
    <div className="App">
      <div className="login">
        <div className="container">
          {isLogginActive && <Login /> Container}
        </div>
      </div>
    </div>
  )
}

export default App;
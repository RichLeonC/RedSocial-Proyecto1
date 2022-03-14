import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Login } from "./components/login/index";

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
          {isLogginActive && <Login /> container}
        </div>
      </div>
    </div>
  )
}

export default App;
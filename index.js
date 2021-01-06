import React from "react";
import ReactDom from "react-dom";

class App extends React.PureComponent {
  render() {
    return "working?";
  }
}

ReactDom.render(<App />, document.getElementById("root"));

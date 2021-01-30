import React, { Component } from "react";
import Header from "./Header";
class App extends Component {
  render() {
    return (
      <div className="App">
        {[
          "Progate App",
          "Progate App Lite",
          "Progate App Dark",
          "Light Weight",
          "Dark Chocolate"
        ].map((text, key) => (
          <Header dark={key % 2 === 0} key={key}>
            {text}
          </Header>
        ))}
      </div>
    );
  }
}

export default App;

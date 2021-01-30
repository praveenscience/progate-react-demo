import React, { Component } from "react";
import Header from "./Header";
class App extends Component {
  state = {
    Dark: true
  };
  handleCheck = e => {
    this.setState({ Dark: e.target.checked });
  };
  render() {
    return (
      <div className="App">
        <Header dark={this.state.Dark}>Progate App</Header>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="form-check p-5">
                <input
                  type="checkbox"
                  id="frmCheck"
                  className="form-check-input mr-2"
                  checked={this.state.Dark}
                  onChange={this.handleCheck}
                />
                <label htmlFor="frmCheck" className="form-check-label">
                  Dark
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value,
    });
  }

  formSubmit(event) {
    event.preventDefault();
    console.log(this.state.selectedOption);
  }

  render() {
    return (
      <div className="Background">
        <form onSubmit={this.formSubmit}>
          <div className="QuestionGroup">
            <div className="RadioButton">
              <label>
                <input
                  type="radio"
                  value="Choice1"
                  name="choice"
                  checked={this.state.selectedOption === "Choice1"}
                  onChange={this.onValueChange}
                />
                {" Choice 1"}
              </label>
            </div>
            <div className="RadioButton">
              <label>
                <input
                  type="radio"
                  value="Choice2"
                  name="choice"
                  checked={this.state.selectedOption === "Choice2"}
                  onChange={this.onValueChange}
                />
                {" Choice 2"}
              </label>
            </div>
            <div className="RadioButton">
              <label>
                <input
                  type="radio"
                  value="Choice3"
                  name="choice"
                  checked={this.state.selectedOption === "Choice3"}
                  onChange={this.onValueChange}
                />
                {" Choice 3"}
              </label>
            </div>
          </div>
          <div className="SubmitGroup">
            <button className="SubmitButton" type="submit">
              {"Submit"}
            </button>
            <button className="SubmitButton" type="button">
              {"Next"}
            </button>
          </div>
          <div>
            Currently selected (for testing) : {this.state.selectedOption}
          </div>
        </form>
      </div>
    );
  }
}

export default App;

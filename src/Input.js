import React from "react";

export class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
  }
  handleInput = event => {
    this.setState({ inputValue: event.target.value });
  };
  handleSendData = () => {
    this.props.handleAddTodo(this.state.inputValue);
    this.setState({ inputValue: "" });
  };
  render() {
    return (
      <div className="input">
        <label htmlFor="input-todo" className="input__label">
          Wpisz zadanie do wykonania
        </label>
        <input
          type="text"
          className="input__input"
          onChange={this.handleInput}
        />
        <button className="input__send" onClick={this.handleSendData}>
          Dodaj do listy zadań
        </button>
      </div>
    );
  }
}

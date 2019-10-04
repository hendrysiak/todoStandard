import React from "react";
import "./App.css";
import { ToDo } from "./ToDo.js";
import { Finished } from "./Finished";
import { Input } from "./Input";

class ToDoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todosTodo: ["ugotować budyń", "zrobić mleko"],
      finishedTodos: ["picie wódki"]
    };
  }
  handleClick = index => {
    this.setState((prevState, props) => {
      const finishedTodo = this.state.todosTodo.splice(index, 1);

      return {
        finishedTodos: prevState.finishedTodos.concat(finishedTodo)
      };
    });
  };

  handleAddTodo = data => {
    this.setState((prevState, props) => {
      return {
        todosTodo: prevState.todosTodo.concat(data)
      };
    });
  };

  render() {
    return (
      <main className="todos">
        <h1>Witaj użytkowniku w aplikacji ToDo!</h1>
        <Input handleAddTodo={this.handleAddTodo} />
        <section className="todo">
          <h2 className="todo__title">To masz do zrobienia</h2>
          <ul className="todo__list">
            {this.state.todosTodo.map((todo, index) => {
              const i = index;
              return (
                <ToDo
                  name={todo}
                  key={index}
                  onClick={() => this.handleClick(i)}
                />
              );
            })}
          </ul>
        </section>
        <section className="finishedTodos">
          <h2 className="finishedTodos__title">To wykonano</h2>
          <ul className="finishedTodos__list">
            {this.state.finishedTodos.map((todo, index) => {
              return <Finished name={todo} key={index} />;
            })}
          </ul>
        </section>
      </main>
    );
  }
}
export default ToDoApp;

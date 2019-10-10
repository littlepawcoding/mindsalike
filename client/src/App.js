// app.js FRONTEND
import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      tasks: []
    };
  }

  updateInput(e) {
    e.preventDefault();
    this.setState({
      input: e.target.value
    });
  }

  componentDidMount() {
    fetch("/api/todos")
      .then(res => res.json())
      .then(data => {
        // upon success, update tasks
        // this should be an object
        this.setState({
          tasks: data
        });
      })
      .catch(error => {
        // upon failure, show error message
        console.log(error);
      });
  }

  addTask() {
    fetch("/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ input: this.state.input })
    })
      // Continue fetch request here
      // response is converted to json
      .then(res => res.json())
      .then(data => {
        this.setState({
          tasks: data,
          input: ""
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  updateTask(id) {
    // update task from database
    // upon success, update tasks
    // upon failure, show error message
    fetch(`/api/todos/${id}`, {
      method: "PUT"
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          tasks: data
        });
      })
      // upon failure, show error message
      .catch(error => {
        console.log(error);
      });
  }

  deleteTask(id) {
    // delete task from database
    // upon success, update tasks
    // use backticks and ${} to grab the id of the task so you can delete them
    fetch(`/api/todos/${id}`, {
      method: "DELETE"
      // don't need header or body as we are not sending anything
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          tasks: data
        });
      })
      // upon failure, show error message
      .catch(error => {
        console.log(error);
      });
  }

  // display the tasks in render
  render() {
    return (
      <div>
        <h1>To Do List</h1>
        <div>
          <input
            placeholder={"New task"}
            value={this.state.input}
            onChange={e => this.updateInput(e)}
          />

          <button onClick={e => this.addTask()}>Submit</button>
        </div>
        <h2>My tasks:</h2>
        <ul>
          {this.state.tasks.map(task => {
            return (
              <li className={task.complete ? "isCompleted" : null}>
                {task.text}{" "}
                <button onClick={e => this.deleteTask(task.id)}>delete</button>
                <button onClick={e => this.updateTask(task.id)}>
                  {task.complete ? "undo" : "done"}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;

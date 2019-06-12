import React from 'react';

class App extends React.Component {
  state = {
    inputValue: '',
    taskList: [],
  }

  handleAddTask = () => {
    const { inputValue } = this.state;
    const newList = this.state.taskList.push(inputValue);
    this.setState({
      taskList: newList
    })
  }

  handleInputChange = (ev) => {
    this.setState({
      inputValue: ev.target.value
    });
  }

  renderTaskList = () => {
    const { taskList } = this.state;
    return taskList.map(task => (
      <div>{task}</div>
    ))
  }

  render() {
    return (
      <div className="main">
        <section className="add">
          <h1 className="header">Add a new task</h1>
          <input
            className="new-task-input"
            onChange={this.handleInputChange}
            name="new-task"
            type="text"
          />
          <button
            type="button"
            onClick={this.handleAddTask}
          >
            Add new task
          </button>
        </section>

        <section className="task-list">
          {this.renderTaskList()}
        </section>
      </div>
    );
  }
}

export default App;

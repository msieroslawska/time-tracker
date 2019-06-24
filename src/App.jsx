import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      taskList: this.getLocalStorageTasks(),
    };
  }

  getLocalStorageTasks = () => JSON.parse(localStorage.getItem('taskList')) || []

  handleAddTask = () => {
    const { inputValue, taskList } = this.state;
    if (inputValue !== '') {
      taskList.push(inputValue);
      this.setState({
        inputValue: '',
        taskList,
      });
      localStorage.setItem('taskList', JSON.stringify(taskList));
    }
  }

  handleRemoveAllTasks = () => {
    this.setState({
      inputValue: '',
      taskList: [],
    });
    localStorage.removeItem('taskList');
  }

  handleInputChange = (ev) => {
    this.setState({
      inputValue: ev.target.value,
    });
  }

  renderTaskList = () => {
    const { taskList } = this.state;
    return taskList.map(task => (
      <div key={this.generateKey(task)}>{task}</div>
    ))
  }

  generateKey = (pre) => `${pre}-${ new Date().getTime() }`

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
            value={this.state.inputValue}
          />

          <button
            type="button"
            onClick={this.handleAddTask}
          >
            Add new task
          </button>

          <button
            type="button"
            onClick={this.handleRemoveAllTasks}
          >
            Clear the task list
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

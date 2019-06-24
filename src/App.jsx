import React from 'react';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { styled } from '@material-ui/styles';

const MainContainer = styled(Container)({
  backgroundColor: '#FFF',
  boxShadow: 'none',
});

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
      <React.Fragment>
        <CssBaseline />
        <MainContainer maxWidth="sm">
          <section>
            <h1>Add a new task</h1>
            <TextField
              id="new-task-input"
              label="Type some text.."
              onChange={this.handleInputChange}
              value={this.state.inputValue}
            />

            <Button
              color="primary"
              onClick={this.handleAddTask}
              variant="contained"
            >
              Add new task
            </Button>

            <Button
              color="secondary"
              onClick={this.handleRemoveAllTasks}
              variant="contained"
            >
              Clear the task list
            </Button>
          </section>

          <section>
            {this.renderTaskList()}
          </section>
        </MainContainer>
      </React.Fragment>
    );
  }
}

export default App;

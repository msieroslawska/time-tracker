import React from 'react';

import ActionButton from './partials/Button';
import Header from './partials/Header';
import TaskList from './partials/TaskList';

import Container from '@material-ui/core/Container';
import grey from '@material-ui/core/colors/grey';
import TextField from '@material-ui/core/TextField';

import { withStyles } from '@material-ui/styles';

const styles = {
  mainContainer: {
    background: grey[200],
    'border-radius': '15px',
    'margin-top': '10%',
    padding: '20px',
  },
};

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

  render() {
    return (
      <Container
        className={this.props.classes.mainContainer}
        maxWidth="sm"
      >
        <Header
          label="Add a new task"
          variant="h3"
        />

        <TextField
          fullWidth
          id="new-task-input"
          label="Type some text.."
          onChange={this.handleInputChange}
          value={this.state.inputValue}
        />

        <ActionButton
          color="primary"
          label="Add new task"
          onClick={this.handleAddTask}
        />

        <ActionButton
          color="secondary"
          label="Clear the task list"
          onClick={this.handleRemoveAllTasks}
        />

        {this.state.taskList.length > 0 && (
          <TaskList
            taskList={this.state.taskList}
          />
        )}
      </Container>
    );
  }
}

export default withStyles(styles)(App);

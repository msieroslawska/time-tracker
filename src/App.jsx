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

const App: React.FC = (props) => {
  const [inputValue, setInput] = React.useState('');
  const [taskList, setTaskLisk] = React.useState([]);

  const addTask = () => {
    if (inputValue) {
      setInput('');
      setTaskLisk([...taskList, inputValue]);
    }
  }

  const removeAllTasks = () => {
    setInput('');
    setTaskLisk([]);
  }

  const handleInputChange = (ev) => {
    setInput(ev.target.value)
  }

  const handleDelete = (task) => {
    const removeIdx = taskList.indexOf(task);
    if (removeIdx < 0) {
      throw new Error('Error in deletion process!');
    } else {
      taskList.splice(removeIdx, 1);
      setTaskLisk([...taskList]);
    }
  }

  return (
    <Container
      className={props.classes.mainContainer}
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
        onChange={handleInputChange}
        value={inputValue}
      />

      <ActionButton
        color="primary"
        label="Add new task"
        onClick={addTask}
      />

      <ActionButton
        color="secondary"
        label="Clear the task list"
        onClick={removeAllTasks}
      />

      {taskList.length > 0 && (
        <TaskList handleDelete={handleDelete} taskList={taskList} />
      )}
    </Container>
  );
}

export default withStyles(styles)(App);

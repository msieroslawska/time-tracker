import React from 'react';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';

import Header from './Header';

import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  taskWrapper: {
    display: 'flex',
  },
});

const TaskList = ({ handleDelete, taskList }) => {
  const classes = useStyles();

  const renderTaskList = () => taskList.map(task => (
    <div className={classes.taskWrapper} key={task}>
      <ListItemText>{task}</ListItemText>
      <IconButton aria-label="delete" color="primary" onClick={() => handleDelete(task)}>
        <DeleteIcon />
      </IconButton>
    </div>
  ));

  return (
    <>
      <Header
        label="Current tasks"
        variant="h4"
      />

      <List aria-label="List of current tasks">
        {renderTaskList()}
      </List>
    </>
  )
};

TaskList.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  taskList: PropTypes.array.isRequired,
};

export default TaskList;

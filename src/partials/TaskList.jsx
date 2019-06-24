import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';

import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';

function TaskList({ taskList }) {
  const generateKey = (pre) => `${pre}-${new Date().getTime()}`;

  const renderTaskList = () => {
    return taskList.map(task => (
      <ListItemText key={generateKey(task)}>{task}</ListItemText>
    ));
  }

  return (
    <React.Fragment>
      <Header
        label="Current tasks"
        variant="h4"
      />

      <List aria-label="List of current tasks">
        {renderTaskList()}
      </List>
    </React.Fragment>
  )
};

TaskList.propTypes = {
  taskList: PropTypes.array.isRequired,
};

export default TaskList;

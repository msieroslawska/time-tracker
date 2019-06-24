import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/styles';

const MyButton = styled(Button)({
  margin: '15px',
});

function ActionButton({ color, label, onClick }) {
  return (
    <MyButton
      color={color}
      onClick={onClick}
      variant="contained"
    >
      {label}
    </MyButton>
  )
};

ActionButton.propTypes = {
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ActionButton;

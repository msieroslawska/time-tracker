import React from 'react';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  header: {
    'margin-bottom': '20px',
    'margin-top': '20px',
  },
});

function Header({ label, variant }) {
  const classes = useStyles();
  return (
    <Typography
      className={classes.header}
      color="primary"
      gutterBottom
      variant={variant}
    >
      {label}
    </Typography>
  );
}

Header.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
}

export default Header;

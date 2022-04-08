import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function PaginationOutlined({ totalPages, onButtonClick, currentPage }) {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <Pagination
          onChange={onButtonClick}
          page={currentPage}
          count={totalPages}
        />
      </div>
    </div>
  );
}

PaginationOutlined.propTypes = {
  totalPages: PropTypes.number.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};
export default PaginationOutlined;

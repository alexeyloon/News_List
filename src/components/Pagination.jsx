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

function PaginationOutlined({ pageCount, onClick, currentPage }) {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <Pagination
          count={pageCount}
          onChange={onClick}
          page={currentPage}
          variant="outlined"
        />
      </div>
    </div>
  );
}

PaginationOutlined.propTypes = {
  pageCount: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};
export default PaginationOutlined;

import React from 'react';
// import { useSelector } from 'react-redux';

import CardContent from '@material-ui/core/Modal';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

function ShowModalWindow({
  title, onClose, createdAt, text,
}) {
  return (
    <div className="modal">
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5" component="h2">
          {text}
        </Typography>
        <Typography variant="body2" component="p">
          {createdAt}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color="primary" onClose={onClose}>Close</Button>
      </CardActions>
    </div>

  );
}

ShowModalWindow.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  createdAt: PropTypes.string.isRequired,

};

export default ShowModalWindow;

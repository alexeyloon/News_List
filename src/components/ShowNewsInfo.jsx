import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

function ShowNewsInfo({
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
        <Button size="small" variant="contained" color="primary" onClick={onClose}>Close</Button>
      </CardActions>
    </div>

  );
}

ShowNewsInfo.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default ShowNewsInfo;

/* eslint-disable react/prop-types */
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';

import * as moment from 'moment';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function NewsItem({
  newsTitle, newsText, newsDate, id, showFull, deleteNews,
}) {
  const classes = useStyles();
  const actualDateFormatted = moment(newsDate).locale('ru').format('DD.MM.YYYY');
  return (
    <Card className={classes.root}>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
        onClick={() => deleteNews(id)}
      >
        Delete
      </Button>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {newsTitle}
        </Typography>
        <Typography variant="h5" component="h2">
          {newsText.substring(0, 150)}
        </Typography>
        <Typography variant="body2" component="p">
          {actualDateFormatted}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" type="button" onClick={() => showFull(id)}>Read more</Button>
      </CardActions>
    </Card>
  );
}

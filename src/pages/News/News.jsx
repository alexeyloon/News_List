import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Pagination from '@material-ui/lab/Pagination';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import NewsItem from '../../components/NewsItem';

import { getNewsRequest, setCurrentPage, getNewsRecordRequest } from '../../redux/News/news.actions';
import ModalWindow from '../../components/Modal/Modal';
import './news.css';

function News() {
  const dispatch = useDispatch();
  const newsList = useSelector((state) => state.news.newsList);
  const currentPage = useSelector((state) => state.news.currentPage);
  const totalPages = useSelector((state) => state.news.totalPages);
  const selectedNewsRecord = useSelector((state) => state.news.newsRecord);
  const onButtonClick = (event, page) => dispatch(setCurrentPage(page));

  const [open, setOpen] = React.useState(false);

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };
    // eslint-disable-next-line no-unused-vars
  const arr = [
    {
      title: '1',
      text: 'werwer',
      id: 1,
    },
  ];

  useEffect(() => {
    dispatch(getNewsRequest());
  }, [currentPage]);

  const showFull = (id) => {
    console.log(`id:${id}`);
    dispatch(getNewsRecordRequest(id));
    setOpen(true);
  };

  return (
    <>
      {newsList && newsList.map((oneNews) => (
        <NewsItem
          key={oneNews.id}
          newsTitle={oneNews.title}
          newsText={oneNews.text}
          newsDate={oneNews.date}
          id={oneNews.id}
          showFull={showFull}
        />
      ))}

      <Pagination
        onChange={onButtonClick}
        page={currentPage}
        count={totalPages}
      />
      <ModalWindow
        open={open}
        onClose={handleClose}
        id={arr[0].id}
      >
        <div className="modal">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {selectedNewsRecord.title}
            </Typography>
            <Typography variant="h5" component="h2">
              {selectedNewsRecord.text}
            </Typography>
            <Typography variant="body2" component="p">
              {selectedNewsRecord.createdAt}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="contained" color="primary">Big Blue Butto</Button>
          </CardActions>
        </div>
      </ModalWindow>
    </>
  );
}

export default News;

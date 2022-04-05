import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Pagination from '@material-ui/lab/Pagination';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import NewsItem from '../../components/NewsItem';
import ShowModalWindow from '../../components/ShowModalWindow';
import {
  getNewsRequest,
  setCurrentPage,
  getNewsRecordRequest,
  cleanNewsRecordRequest,
  deleteNewsRecordRequest,
  addNewsRecordRequest,
} from '../../redux/News/news.actions';
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

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    dispatch(cleanNewsRecordRequest(selectedNewsRecord.id));

    setOpen(false);
  };
  const [newsTitle, setNewsTitle] = useState('');
  const [newsText, setNewsText] = useState('');
  const handleNewsTitle = (event) => setNewsTitle(event.target.value);
  console.log(newsText);
  const handleNewsText = (event) => setNewsText(event.target.value);

  const handleSave = () => {
    dispatch(addNewsRecordRequest({
      createdAt: '12.12.12',
      title: newsTitle,
      text: newsText,
    }));
    handleClose();
  };

  const isSaveButtonDisabled = (newsTitle.trim().length === 0 || newsText.trim().length === 0);
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
    // console.log(`id:${id}`);
    dispatch(getNewsRecordRequest(id));
    setOpen(true);
  };

  const deleteNews = (id) => {
    // console.log(id);
    dispatch(deleteNewsRecordRequest(id));
    // setOpen(true);
  };

  return (
    <>
      <div className="news-container">

        <CardActions>
          <Button size="small" variant="contained" color="primary" onClick={handleOpen}>Add news</Button>
        </CardActions>

        {newsList && newsList.map((oneNews) => (
          <NewsItem
            key={oneNews.id}
            newsTitle={oneNews.title}
            newsText={oneNews.text}
            newsDate={oneNews.date}
            id={oneNews.id}
            showFull={showFull}
            deleteNews={deleteNews}
          />
        ))}
      </div>
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
        {selectedNewsRecord.id
          ? (
            <ShowModalWindow
              open={open}
              title={selectedNewsRecord.title}
              text={selectedNewsRecord.text}
              createdAt={selectedNewsRecord.createdAt}
              onClose={handleClose}
            />
          )
          : (
            <div className="modal-window">
              <div className="modal-container">
                <div className="modal-header">
                  <TextField id="outlined-basic" label="Enter news title" variant="outlined" onChange={handleNewsTitle} />
                  <CardActions>
                    <Button size="small" variant="contained" color="primary" onClick={handleClose}>Close</Button>
                  </CardActions>
                </div>
                <TextareaAutosize aria-label="minimum height" minRows={3} placeholder="Enter news text" onChange={handleNewsText} />
                ;
                <div className="modal-footer">
                  <CardActions>
                    <Button size="small" variant="contained" color="primary" onClick={handleSave} disabled={isSaveButtonDisabled}>Save</Button>
                  </CardActions>
                </div>
              </div>
            </div>
          )}
      </ModalWindow>
    </>
  );
}

export default News;

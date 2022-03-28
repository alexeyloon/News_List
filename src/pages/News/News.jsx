import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import Pagination from '@material-ui/lab/Pagination';
import NewsItem from '../../components/NewsItem';
import { getNewsRequest, setCurrentPage } from '../../redux/News/news.actions';
// import ModalWindow from '../../components/Modal';
import ModalWindow from '../../components/Modal/Modal';

function News() {
  const dispatch = useDispatch();
  // const [page, setCurrentPage] = useState(1)
  const newsList = useSelector((state) => state.news.newsList);
  const currentPage = useSelector((state) => state.news.currentPage);
  const totalPages = useSelector((state) => state.news.totalPages);

  // TODO: count total pages amount according LIMIT and news amount
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
    // загрузить содержмое новости
    // через setModalContent присаоить модалке содержимое
    setOpen(true);
  };

  return (
    <>
      {newsList.map((oneNews) => (
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
      {/* <NewsItem
        newsTitle="Hellos"
        newsText="Wery important news"
        newsDate={4}
        showFull={showFull}
      /> */}
      <ModalWindow
        open={open}
        onClose={handleClose}
        id={arr[0].id}
      >
        <div>{arr[0].text}</div>
      </ModalWindow>
    </>
  );
}

export default News;

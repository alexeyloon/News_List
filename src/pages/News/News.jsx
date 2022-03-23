import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import Pagination from '@material-ui/lab/Pagination';
import NewsItem from '../../components/NewsItem';
import { getNewsRequest, setCurrentPage } from '../../redux/News/news.actions';

function News() {
  const dispatch = useDispatch();
  // const [page, setCurrentPage] = useState(1)
  const newsList = useSelector((state) => state.news.newsList);
  const currentPage = useSelector((state) => state.news.currentPage);
  const totalPages = useSelector((state) => state.news.totalPages);

  // TODO: count total pages amount according LIMIT and news amount
  const onButtonClick = (event, page) => dispatch(setCurrentPage(page));

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

  return (
    <>

      {newsList.map((oneNews) => (
        <NewsItem
          key={oneNews.id}
          newsTitle={oneNews.title}
          newsText={oneNews.text}
          newsDate={oneNews.date}
        />
      ))}

      <Pagination
        onChange={onButtonClick}
        page={currentPage}
        count={totalPages}
      />
      <NewsItem
        newsTitle="Hellos"
        newsText="Wery important news"
        newsDate={4}
      />
    </>
  );
}

export default News;

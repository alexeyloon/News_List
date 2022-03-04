import React from 'react';

import Pagination from '../../components/Pagination';
import NewsItem from '../../components/NewsItem';

function News() {
  // eslint-disable-next-line no-unused-vars
  const arr = [
    {
      title: '1',
      text: 'werwer',
      id: 1,
    },
  ];
  return (
    <>
      <Pagination currentPage={1} onClick={() => {}} pageCount={10} />
      <NewsItem />
      {arr.map(({ title, text }) => <NewsItem title={title} text={text} />)}
    </>
  );
}

export default News;

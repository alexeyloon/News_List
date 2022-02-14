import React, { useEffect, useState } from 'react';
import News from './pages/News';

function App() {
  const [data, setData] = useState({});
  const url = 'https://62061fb7161670001741bf36.mockapi.io/api/news?page=1&limit=10';
  const fetchData = async () => {
    try {
      // eslint-disable-next-line no-undef
      const response = await fetch(url, {
        method: 'GET',
      });
      const result = await response.json();
      console.log(result);
      setData(result);
    } catch (error) {
      console.log('error', error);
    }
  };
  useEffect(() => {
    console.log('tick', data, 5, 6);

    fetchData();
  }, []);

  return (
    <News />
  );
}

export default App;
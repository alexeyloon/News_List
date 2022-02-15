import React, { useEffect, useState } from 'react';
import News from './pages/News';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState({});
  const url = 'https://62061fb7161670001741bf36.mockapi.io/api/news?page=1&limit=10';
  const axiosData = async () => {
    // eslint-disable-next-line no-undef
    const response = axios.get(url)
      .then((result) => console.log('success:', result))
      .catch((error) => console.log('error:', error));

    console.log('error', response);
  };

  useEffect(() => {
    console.log('tick', data, 5, 6);

    axiosData();
  }, []);

  return (
    <News />
  );
}

export default App;

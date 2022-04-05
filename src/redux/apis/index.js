// eslint-disable-next-line import/prefer-default-export
export function fetchNews({ page, limit }) {
  // eslint-disable-next-line no-undef
  return fetch(`https://62061fb7161670001741bf36.mockapi.io/api/news?page=${page}&limit=${limit}`).then((response) => response.json());
}

export function fetchNewsRecord(id) {
  // eslint-disable-next-line no-undef
  return fetch(`https://62061fb7161670001741bf36.mockapi.io/api/news/${id}`).then((response) => response.json());
}

export async function fetchNewsDelete(id) {
  const URL = `https://62061fb7161670001741bf36.mockapi.io/api/news/${id}`;
  // eslint-disable-next-line no-undef
  await fetch(URL, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  });
}

// export function fetchAddNews(payload) {
//   // eslint-disable-next-line no-undef
//   return fetch(`https://62061fb7161670001741bf36.mockapi.io/api/news?page=${page}&limit=${limit}`).then((response) => response.json());
// }

export async function fetchAddNews(payload) {
  const URL = 'https://62061fb7161670001741bf36.mockapi.io/api/news';
  // eslint-disable-next-line no-undef
  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Access-Control-Allow-Origin': 'origin-list',
    },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  return data;
}

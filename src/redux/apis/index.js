// eslint-disable-next-line import/prefer-default-export
export function fetchNews({ page, limit }) {
  // eslint-disable-next-line no-undef
  return fetch(`https://62061fb7161670001741bf36.mockapi.io/api/news?page=${page}&limit=${limit}`).then((response) => response.json());
}

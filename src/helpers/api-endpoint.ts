const options: object = {
  mode: 'cors',
  credentials: 'same-origin',
  headers: {
    Accept: 'application/json',
    Referer: import.meta.env.VITE_API_REFERER,
    Authorization: `Bearer ${import.meta.env.VITE_API_AUTH_TOKEN}`,
  },
};

export default function ApiEndpoint(
  endpoint: string,
  storeKey: string,
  commit: any,
  params: any = false
) {
  const url: string = `${import.meta.env.VITE_API_BASE_URL + endpoint}?${new URLSearchParams(params)}`;
  return fetch(url, options)
    .then((response) => response.json())
    .then((data) => commit(storeKey, data))
    .catch((err) => console.error(err));
}

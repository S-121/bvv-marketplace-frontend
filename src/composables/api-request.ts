const options: object = {
  mode: 'cors',
  credentials: 'same-origin',
  headers: {
    Accept: 'application/json',
    Referer: import.meta.env.VITE_API_REFERER,
    Authorization: `Bearer ${import.meta.env.VITE_API_AUTH_TOKEN}`,
  },
};

export default function useApiRequest(endpoint: string, params: any = false): Promise<any> {
  let url: string = `${import.meta.env.VITE_API_BASE_URL + endpoint}`;
  if (params) url += `?${new URLSearchParams(params)}`;

  return fetch(url, options)
    .then((response) => response.json())
    .catch((err) => console.error(err));
}

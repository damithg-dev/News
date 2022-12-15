// https://newsapi.org/docs/authentication
const key = 'bb9c23914b114fc0bd0d72aeef526b4e';
const baseUrl = 'https://newsapi.org/v2/';

export function request<TResponse>(
  url: string,
  config: RequestInit = {},
): Promise<TResponse> {
  const constructedUrl = `${baseUrl}${url}`;
  const constructedHeader: RequestInit = {
    headers: {
      Authorization: `Bearer ${key}`,
    },
    ...config,
  };

  return fetch(constructedUrl, constructedHeader)
    .then(response => response.json())
    .then(data => {
      return data as TResponse;
    });
}

export const api = {
  get: <TResponse>(url: string) => request<TResponse>(url),
};

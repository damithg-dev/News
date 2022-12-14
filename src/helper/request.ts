// https://newsapi.org/docs/authentication
const key = '9621948bf0294667b538835e1c6f2360';
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

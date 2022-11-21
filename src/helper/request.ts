// https://newsapi.org/docs/authentication
const key = '9621948bf0294667b538835e1c6f2360';
const baseUrl = 'https://newsapi.org/v2/';

// Make the `request` function generic
// to specify the return data type:
function request<TResponse>(
  url: string,
  // `RequestInit` is a type for configuring
  // a `fetch` request. By default, an empty object.
  config: RequestInit = {},

  // This function is async, it will return a Promise:
): Promise<TResponse> {
  const constructedUrl = `${baseUrl}${url}`;
  const constructedHeader: RequestInit = {
    headers: {
      Authorization: `Bearer ${key}`,
    },
    ...config,
  };
  return (
    fetch(constructedUrl, constructedHeader)
      // When got a response call a `json` method on it
      .then(response => response.json())
      // and return the result data.
      .then(data => data as TResponse)
  );

  // We also can use some post-response
  // data-transformations in the last `then` clause.
}

export const api = {
  get: <TResponse>(url: string) => request<TResponse>(url),
};

export const URL = 'https://swapi.dev/api/people/';

const caches = new Map();
const pendingRequests = new Map();

export const getData = async <T>(page: string): Promise<T> => {
  if (caches.has(page)) {
    return caches.get(page) as T;
  }

  if (pendingRequests.has(page)) {
    return pendingRequests.get(page);
  }

  const fetchPromise = (async () => {
    try {
      const response = await fetch(page);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      caches.set(page, data);
      return data;
    } finally {
      pendingRequests.delete(page);
    }
  })();

  pendingRequests.set(page, fetchPromise);
  return fetchPromise;
};

export function useLocalStorage(key: string) {
  const stor = JSON.parse(localStorage.getItem(key) || '[]');

  function addStor(country: string) {
    const SetCountry = new Set([...stor]).add(country);
    localStorage.setItem(key, JSON.stringify([...SetCountry]));
  }

  function delStor(country: string) {
    const SetCountry = new Set([...stor].filter((item) => item !== country));
    localStorage.setItem(key, JSON.stringify([...SetCountry]));
  }

  return { stor, addStor, delStor };
}

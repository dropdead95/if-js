export const getHomes = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Could not fetch${url}, error - ${res.status}`);
  }
  return res.json();
};

export const addToStorage = (url, getCards) => {
  if (!sessionStorage.getItem('hotels')) {
    getHomes(url).then((data) => {
      getCards(data);
      sessionStorage.setItem('hotels', JSON.stringify(data));
    });
  } else {
    getCards(JSON.parse(sessionStorage.getItem('hotels')));
  }
};

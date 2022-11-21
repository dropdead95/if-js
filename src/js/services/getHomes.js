const getHomes = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Could not fetch${url}, error - ${res.status}`);
  }
  return res.json();
};

export default getHomes;

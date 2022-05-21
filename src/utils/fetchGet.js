const fetchGet = async (path = '') => {
  console.log(path);
  const res = await fetch(path);

  return res.json();
};
export {fetchGet};

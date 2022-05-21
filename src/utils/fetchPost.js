const fetchPost = async (
  path = '',
  data = {},
  isFileUpload = false,
  method = 'POST',
) => {
  console.log(path, data, isFileUpload);
  let res = null;
  try {
    res = await fetch(path, {
      method,
      headers: {
        Accept: 'application/json, text/plain, */*', // It can be used to overcome cors errors
        'Content-Type': isFileUpload
          ? 'multipart/form-data'
          : 'application/json',
      },
      body: isFileUpload ? data : JSON.stringify(data),
    });
  } catch (e) {
    console.log(e, 'sda');
  }
  // console.log('sad', await res.text());
  return res.json();
};
export {fetchPost};

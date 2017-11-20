const { CLIENT_ID } = process.env;
/*
  * Utility for fetching images from the Imgur API
  * @param {String} endpoint - The API endpoint to hit
*/
export default (endpoint, options = {}) => {
  const init = {
    headers: Object.assign(
      {},
      {
        Authorization: `Client-ID ${CLIENT_ID}`,
      },
      options.headers
    ),
  };
  return fetch(endpoint, init)
    .then(result => {
      console.log('result', result);
    })
    .catch(err => {
      console.log('err', err);
    });
};

const { INFERNO_APP_CLIENT_ID } = process.env;
/*
  * Utility for fetching images from the Imgur API
  * @param {String} endpoint - The API endpoint to hit
*/
export default (endpoint, options = {}) => {
  const init = {
    headers: Object.assign(
      {},
      {
        Authorization: `Client-ID ${INFERNO_APP_CLIENT_ID}`,
      },
      options.headers
    ),
  };
  return fetch(endpoint, init)
    .then(result => {
      return result.json();
    })
    .catch(err => {
      console.log('err', err);
    });
};

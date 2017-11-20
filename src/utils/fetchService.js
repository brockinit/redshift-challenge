const { INFERNO_APP_CLIENT_ID } = process.env;
/*
  * Utility for fetching images from the Imgur API
  * @param {String} endpoint - The API endpoint to hit
  * @returns {Object} result - The data received in the response
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
      throw new Error(err.message);
    });
};

/*
  * Utility for fetching images from the Imgur API
  * @param {String} endpoint - The API endpoint to hit
*/
export default endpoint => {
  return fetch(endpoint)
    .then(result => {
      console.log('result', result);
    })
    .catch(err => {
      console.log('err', err);
    });
};

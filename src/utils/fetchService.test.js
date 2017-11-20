import fetchService from './fetchService';
const { INFERNO_APP_IMGUR_API_ENDPOINT } = process.env;

test('returns data when the request is successful', () => {
  fetchService(INFERNO_APP_IMGUR_API_ENDPOINT)
    .then(res => {
      expect(res.data).toBeInstanceOf('array');
      expect(res.data.length).toBeGreaterThan(0);
    })
    .catch(err => {});
});

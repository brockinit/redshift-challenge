import { fetchService } from '../utils';
const { INFERNO_APP_IMGUR_API_ENDPOINT } = process.env;

// ACTION TYPES
export const GET_IMAGES = 'images/GET_IMAGES';
export const GET_IMAGES_SUCCESS = 'images/GET_IMAGES_SUCCESS';
export const GET_IMAGES_FAILURE = 'images/GET_IMAGES_FAILURE';

// INITIAL STATE
const initialState = [];

// ASYNC ACTIONS
export const getImages = () => {
  return {
    type: GET_IMAGES,
  };
};

// ACTIONS
export const fetchImages = () => {
  return function(dispatch) {
    dispatch(getImages());
    return fetchService(`${INFERNO_APP_IMGUR_API_ENDPOINT}?page=2`)
      .then(images => {
        // TODO Remove this filter and use actual pagination
        const filteredImages = images.data.filter((img, i) => i < 10);
        return dispatch({ type: GET_IMAGES_SUCCESS, images: filteredImages });
      })
      .catch(err => {
        dispatch({ type: GET_IMAGES_FAILURE });
        throw err;
      });
  };
};

// REDUCERS
function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_IMAGES_SUCCESS:
      return state.concat(action.images);
    default:
      return state;
  }
}

export default reducer;

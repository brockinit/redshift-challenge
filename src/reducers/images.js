import { fetchService } from '../utils';
const { IMGUR_API_ENDPOINT } = process.env;

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
    return fetchService(IMGUR_API_ENDPOINT)
      .then(images => {
        return dispatch({ type: GET_IMAGES_SUCCESS, images });
      })
      .catch(err => {
        dispatch(GET_IMAGES_FAILURE);
        throw err;
      });
  };
};

// REDUCERS
function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_IMAGES_SUCCESS:
      return [...state, action.images];
    default:
      return state;
  }
}

export default reducer;

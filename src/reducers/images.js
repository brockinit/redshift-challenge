import { fetchService } from '../utils';

// ACTION TYPES
export const GET_IMAGES = 'images/GET_IMAGES';
export const GET_IMAGES_SUCCESS = 'images/GET_IMAGES_SUCCESS';

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
    // Call API here
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

import { fetchService } from '../utils';
const { INFERNO_APP_IMGUR_API_ENDPOINT } = process.env;
const IMAGE_LIMIT = 12;

// ACTION TYPES
export const GET_IMAGES = 'images/GET_IMAGES';
export const GET_IMAGES_SUCCESS = 'images/GET_IMAGES_SUCCESS';
export const GET_IMAGES_FAILURE = 'images/GET_IMAGES_FAILURE';

export const SHOW_MORE_IMAGES = 'images/SHOW_MORE_IMAGES';
export const INCREMENT_PAGE = 'images/INCREMENT_PAGE';

// INITIAL STATE
const initialState = {
  items: [],
  currentPage: 0,
};

// ASYNC ACTIONS
export const getImages = () => {
  return {
    type: GET_IMAGES,
  };
};

export const incrementPage = () => {
  return {
    type: INCREMENT_PAGE,
  };
};

// ACTIONS
export const fetchImages = () => {
  return function(dispatch, getState) {
    const imageState = getState().images;
    dispatch(getImages());
    return fetchService(
      `${INFERNO_APP_IMGUR_API_ENDPOINT}?page=${imageState.currentPage}`
    )
      .then(images => {
        const filteredImages = images.data.filter(
          (img, i) => img.link.includes('i.') && i < IMAGE_LIMIT
        );
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
      return {
        ...state,
        items: state.items.concat(action.images),
      };
    case INCREMENT_PAGE:
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    default:
      return state;
  }
}

export default reducer;

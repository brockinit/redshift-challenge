import reducer, {
  GET_IMAGES,
  GET_IMAGES_SUCCESS,
  INCREMENT_PAGE,
  getImages,
  incrementPage,
} from './images';

describe('actions', () => {
  it('getImages should return the correct action', () => {
    const expectedAction = {
      type: GET_IMAGES,
    };
    expect(getImages()).toEqual(expectedAction);
  });
  it('incrementPage should return the correct action', () => {
    const expectedAction = {
      type: INCREMENT_PAGE,
    };
    expect(incrementPage()).toEqual(expectedAction);
  });
});

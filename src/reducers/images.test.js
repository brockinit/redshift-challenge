import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import reducer, {
  GET_IMAGES,
  GET_IMAGES_SUCCESS,
  INCREMENT_PAGE,
  getImages,
  incrementPage,
  fetchImages,
} from './images';

const { INFERNO_APP_CLIENT_ID, INFERNO_APP_IMGUR_API_ENDPOINT } = process.env;
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

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

describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  test('fetchImages calls GET_IMAGES_SUCCESS', () => {
    const mockImages = [{ link: 'https://i.somelink.com' }];
    fetchMock.getOnce('*', {
      data: mockImages,
    });
    const expectedActions = [
      { type: GET_IMAGES },
      { type: GET_IMAGES_SUCCESS, images: mockImages },
    ];

    const store = mockStore({ images: { items: [], currentPage: 0 } });

    return store.dispatch(fetchImages()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

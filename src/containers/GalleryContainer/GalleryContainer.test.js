import { renderToSnapshot, isClassVNode } from 'inferno-test-utils';
import GalleryContainer from './';

test('GalleryContainer should be a class component', () => {
  const isClass = isClassVNode(<GalleryContainer />);
  expect(isClass).toBe(true);
});

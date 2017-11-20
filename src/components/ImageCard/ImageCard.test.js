import {
  renderToSnapshot,
  isClassVNode,
  isFunctionalVNode,
} from 'inferno-test-utils';
import ImageCard from './';

test('ImageCard should be a functional component', () => {
  const isClass = isClassVNode(<ImageCard />);
  const isFunctional = isFunctionalVNode(<ImageCard />);
  expect(isClass).toBe(false);
  expect(isFunctional).toBe(true);
});

test('should have an image prop', () => {
  const shallowRender = renderToSnapshot(<ImageCard />);
  expect(shallowRender).toMatchSnapshot();
});

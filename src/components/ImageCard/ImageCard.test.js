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

test('ImageCard should render correctly', () => {
  const shallowRender = renderToSnapshot(<ImageCard />);
  expect(shallowRender).toMatchSnapshot();
});

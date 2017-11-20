import {
  renderToSnapshot,
  isClassVNode,
  isFunctionalVNode,
} from 'inferno-test-utils';
import Footer from './';

test('Footer should be a functional component', () => {
  const isClass = isClassVNode(<Footer />);
  const isFunctional = isFunctionalVNode(<Footer />);
  expect(isClass).toBe(false);
  expect(isFunctional).toBe(true);
});

test('Footer should render correctly', () => {
  const shallowRender = renderToSnapshot(<Footer />);
  expect(shallowRender).toMatchSnapshot();
});

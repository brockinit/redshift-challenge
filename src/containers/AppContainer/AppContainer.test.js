import { isClassVNode } from 'inferno-test-utils';
import AppContainer from './';

test('AppContainer should be a class component', () => {
  const isClass = isClassVNode(<AppContainer />);
  expect(isClass).toBe(true);
});

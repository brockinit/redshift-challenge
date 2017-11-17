import { render } from 'inferno';
import AppContainer from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<AppContainer />, div);
});

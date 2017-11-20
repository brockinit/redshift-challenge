import { render } from 'inferno';
import { AppContainer } from './containers';
import './index.css';
import './registerServiceWorker';
import { Provider } from 'inferno-redux';
import configureStore from './store';

const store = configureStore();

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app')
);

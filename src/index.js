import { render } from 'inferno';
import { AppContainer } from './containers';
import './index.css';
import './registerServiceWorker';

render(<AppContainer />, document.getElementById('app'));

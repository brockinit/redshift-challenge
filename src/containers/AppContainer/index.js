import { version } from 'inferno';
import Component from 'inferno-component';
import '../../registerServiceWorker';
import Logo from '../../logo';
import './AppContainer.css';

class AppContainer extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo width="80" height="80" />
          <h1>{`Welcome to Inferno ${version}`}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/AppContainer.js</code> and save to
          reload.
        </p>
      </div>
    );
  }
}

export default AppContainer;

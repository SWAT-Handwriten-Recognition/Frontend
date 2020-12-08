import { render } from 'react-dom'
import GlobalStyles from './assets/GlobalStyles/GlobalStyles'
import App from './components/App/index.jsx'
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { configureStore } from './utils/redux/store';
import { HashRouter as Router } from 'react-router-dom'
import { positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

const root = document.getElementById('root')

const store = configureStore();

const persistor = persistStore(store);

const options = {
  timeout: 5000,
  position: positions.TOP_CENTER
};

render(
  <Provider store={store}>
    <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
      <Router basename="/">
        <AlertProvider template={AlertTemplate} {...options}>
          <GlobalStyles />
          <App />
        </AlertProvider>
      </Router>
    </PersistGate>
  </Provider>,
  root,
);

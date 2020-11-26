import { render } from 'react-dom'
import styled from 'styled-components'
import App from './components/App/index.jsx'
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { configureStore } from './utils/redux/store';

const root = document.getElementById('root')

const store = configureStore();

const persistor = persistStore(store);

const Greet = styled.div`
  color: red;
`

render(
  <Provider store={store}>
    <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
      <Greet>
        <App />
      </Greet>
    </PersistGate>
  </Provider>,
  root,
);

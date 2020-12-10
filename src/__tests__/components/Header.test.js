import { shallow } from 'enzyme';
import Header from '../../components/Header/index.jsx';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { configureStore } from '../../utils/redux/store.js';
import { HashRouter as Router } from 'react-router-dom'

const store = configureStore();

const persistor = persistStore(store);

describe('<Header />', () => {
  const wrapper = shallow(
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <Router basename="/">
          <Header />
        </Router>
      </PersistGate>
    </Provider>
  );

  it('is the Header rendering?', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('matches the snap shot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

/**
 * App component, root of the application.
 */
import { Switch, Route, useHistory } from 'react-router-dom';
import Home from '../../pages/Home/index.jsx';
import SignUp from '../../pages/SignUp/index.jsx';
import SignIn from '../../pages/SignIn/index.jsx';
import Application from '../../pages/Application/index.jsx';
import { connect } from 'react-redux';

const App = ({ user }) => {
  const history = useHistory();

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/signup">
        <SignUp />
      </Route>
      <Route exact path="/signin">
        <SignIn />
      </Route>
      <Route exact path="/app">
        {user &&
          (Object.entries(user).length !== 2 ? history.push('/') : <Application />)}
      </Route>
    </Switch>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(App);

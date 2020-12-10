/**
 * App component, root of the application.
 */
import { Switch, Route } from 'react-router-dom'
import Home from '../../pages/Home/index.jsx'
import SignUp from '../../pages/SignUp/index.jsx'
import SignIn from '../../pages/SignIn/index.jsx'
import { connect } from 'react-redux';

const App = () => {

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
    </Switch>
  )
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(App);

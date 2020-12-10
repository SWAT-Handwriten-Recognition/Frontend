/**
 * App component, root of the application.
 */
import { Switch, Route } from 'react-router-dom'
import Home from '../../pages/Home/index.jsx'
import SignUp from '../../pages/SignUp/index.jsx'
import EmailAndPassword from '../../pages/Email&Password/index.jsx'

const App = () => {

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/signup/1">
        <SignUp />
      </Route>
      <Route exact path="/signup/2">
        <EmailAndPassword />
      </Route>
    </Switch>
  )
}

export default App

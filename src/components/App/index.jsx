/**
 * App component, root of the application.
 */
import Features from '../Features/index.jsx'
import { Switch, Route } from 'react-router-dom'
import Home from '../../pages/Home/index.jsx'

const App = () => {

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/signup">
        <Features scroll={scroll} />
      </Route>
    </Switch>
  )
}

export default App

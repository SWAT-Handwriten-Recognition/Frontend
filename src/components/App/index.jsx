/**
 * App component, root of the application.
 */
import { Switch, Route } from 'react-router-dom'
import Home from '../../pages/Home/index.jsx'
import NameAdnNickName from '../../pages/Name&NickName/index.jsx'
const App = () => {

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/signup/1">
        <NameAdnNickName scroll={scroll} />
      </Route>
      <Route exact path="/signup/2">
        <NameAdnNickName scroll={scroll} />
      </Route>
    </Switch>
  )
}

export default App

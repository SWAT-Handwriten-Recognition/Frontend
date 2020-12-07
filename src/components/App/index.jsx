/**
 * App component, root of the application.
 */
import Header from '../Header/index.jsx'
import HomeAnimation from '../HomeAnimation/index.jsx'
import Features from '../Features/index.jsx'
import { useState } from 'react'
import { Switch, Route } from 'react-router-dom'

const App = () => {
  const [scroll, setScroll] = useState(false)

  return (
    <Switch>
      <Route path="/">
        <Header />
        <HomeAnimation setScroll={setScroll} />
        <Features scroll={scroll} />
      </Route>
    </Switch>
  )
}

export default App

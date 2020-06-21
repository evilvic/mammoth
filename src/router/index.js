import React from 'react'
import { Switch, Route} from 'react-router-dom'

const DummyComponent = () => <h1>Hey!</h1>

const Router = () => (
  <Switch>
    <Route exact path='/' component={DummyComponent}/>
  </Switch>
)

export default Router
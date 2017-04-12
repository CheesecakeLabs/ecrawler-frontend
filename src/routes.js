import React from 'react'
import { Route } from 'react-router'

import App from './views/app'
import Login from './views/login'
import Dashboard from './views/dashboard'
import NotFound from './views/not-found'

export const isLoggedIn = (user) => user && !!user.auth

export const userLoginRequired = store => (nextState, replace) => {
  const user = store.getState()
  if (!isLoggedIn(user)) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname },
    })
  }
}

const routes = store => (
  <Route component={App} >
    <Route path="/" component={Login} />
    <Route path="/dashboard" component={Dashboard} onEnter={userLoginRequired(store)} />
    <Route path="*" component={NotFound} />
  </Route>
)

export default routes

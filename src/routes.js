import React from 'react'
import { Route } from 'react-router'

import App from './views/app'
import Login from './views/login'
import Dashboard from './views/dashboard'
import NotFound from './views/not-found'
import { logout } from './modules/auth/actions'

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

export const doLogout = (dispatch) => (nextState, replace) => {
  dispatch(logout())
  replace({
    pathname: '/',
  })
}

const routes = store => (
  <Route component={App} >
    <Route path="/" component={Login} />
    <Route path="/dashboard" component={Dashboard} onEnter={userLoginRequired(store)} />
    <Route path="/logout" onEnter={doLogout(store.dispatch)} />
    <Route path="*" component={NotFound} />
  </Route>
)

export default routes

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'

import immutable from 'immutable'
import immutableDevtools from 'immutable-devtools'

import configureStore from './store/configure-store'
import routes from './routes'

import './styles/index.css'


const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

if (process.env.NODE_ENV === 'development') {
  immutableDevtools(immutable)
}


const Root = () => (
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
)


ReactDOM.render(
  <Root store={store} history={history} />,
  document.getElementById('root')
)

import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import throttle from 'lodash/throttle'

import './bootstrap'
import configureStore from './store/configure-store'
import routes from './routes'
import * as storageService from './services/storage-service'

const persistedState = storageService.loadState()

const store = configureStore(persistedState)
const history = syncHistoryWithStore(browserHistory, store)

store.subscribe(throttle(() => {
  storageService.saveState({
    auth: store.getState().auth,
    adminURL: store.getState().adminURL,
  })
}, 1000))

const Root = () => (
  <Provider store={store}>
    <Router history={history} routes={routes(store)} />
  </Provider>
)

render(<Root />, document.getElementById('root'))

import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import { filters } from './filters/reducers'
import { auth } from './auth/reducers'

const appReducer = combineReducers({
  routing,
  filters,
  auth,
})

const rootReducer = (state, action) => (
  appReducer(state, action)
)

export default rootReducer

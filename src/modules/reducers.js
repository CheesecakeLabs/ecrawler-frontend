import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { loading } from '@cheesecakelabs/boilerplate/reducers'

import { filters } from './filters/reducers'
import { auth, userCreated } from './auth/reducers'

const appReducer = combineReducers({
  routing,
  filters,
  auth,
  userCreated,
  loading,
})

const rootReducer = (state, action) => (
  appReducer(state, action)
)

export default rootReducer

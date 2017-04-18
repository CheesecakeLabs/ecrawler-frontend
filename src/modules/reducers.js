import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { loading } from '@cheesecakelabs/boilerplate/reducers'

import { filters } from './filters/reducers'
import { auth, userCreated, adminURL } from './auth/reducers'

const appReducer = combineReducers({
  routing,
  filters,
  auth,
  userCreated,
  adminURL,
  loading,
})

export default appReducer

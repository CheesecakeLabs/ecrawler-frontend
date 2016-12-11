import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import { uiAlert } from './ui-alert/reducers'


const appReducer = combineReducers({
  routing,
  uiAlert,
})

const rootReducer = (state, action) => (
  appReducer(state, action)
)


export default rootReducer

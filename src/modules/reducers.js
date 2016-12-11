import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'


const appReducer = combineReducers({
  routing,
})

const rootReducer = (state, action) => (
  appReducer(state, action)
)


export default rootReducer

import createReducer from '../../utils/create-reducer'
import { AUTHENTICATE_WITH_GOOGLE } from './actions'

const INITIAL_STATE = null

const token = createReducer(INITIAL_STATE, {
  [AUTHENTICATE_WITH_GOOGLE.FULFILLED]: (state, { payload }) => payload,
})

export default token

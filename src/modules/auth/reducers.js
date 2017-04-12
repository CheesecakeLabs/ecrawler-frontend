import createReducer from '../../utils/create-reducer'
import { AUTHENTICATE_WITH_GOOGLE } from './actions'

const INITIAL_STATE = null

export const auth = createReducer(INITIAL_STATE, {
  [AUTHENTICATE_WITH_GOOGLE.FULFILLED]: (state, { payload }) => payload,
})

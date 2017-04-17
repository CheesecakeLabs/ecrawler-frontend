import createReducer from '../../utils/create-reducer'
import { AUTHENTICATE_WITH_GOOGLE, LOGOUT } from './actions'

const INITIAL_STATE_AUTH = null
const INITIAL_STATE_CREATED_USER = false
const INITIAL_STATE_ADMIN_URL = ''

export const auth = createReducer(INITIAL_STATE_AUTH, {
  [AUTHENTICATE_WITH_GOOGLE.FULFILLED]: (state, { payload }) => payload.token,
  [LOGOUT]: () => INITIAL_STATE_AUTH,
})

export const userCreated = createReducer(INITIAL_STATE_CREATED_USER, {
  [AUTHENTICATE_WITH_GOOGLE.FULFILLED]: (state, { payload }) => payload.user_created,
})

export const adminURL = createReducer(INITIAL_STATE_ADMIN_URL, {
  [AUTHENTICATE_WITH_GOOGLE.FULFILLED]: (state, { payload }) => payload.admin_url,
})

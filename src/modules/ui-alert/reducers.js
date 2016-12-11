/* eslint-disable no-unused-vars */
import immutable from 'immutable'
import createReducer from '../../utils/create-reducer'
import {
  SHOW_ALERT_LAYER,
  CLOSE_ALERT_LAYER,
} from './actions'

const INITIAL_STATE = new immutable.Map()

export const uiAlert = createReducer(INITIAL_STATE, {
  [SHOW_ALERT_LAYER]: (state, action) => {
    const { payload } = action
    return state.mergeDeep(immutable.fromJS({
      visible: true,
      message: payload.message,
    }))
  },


  [CLOSE_ALERT_LAYER]: (state) => (
    state.mergeDeep(immutable.fromJS({
      visible: false,
      message: null,
    }))
  ),
})

import createReducer from '../../utils/create-reducer'

const INITIAL_STATE = null


export const token = createReducer(INITIAL_STATE, {
  AUTHENTICATE_WITH_GOOGLE: (state, action) => {
    const { payload, error } = action
    if (error) return state
    return payload
  },
})

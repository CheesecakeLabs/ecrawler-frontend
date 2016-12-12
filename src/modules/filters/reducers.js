import createReducer from '../../utils/create-reducer'

const INITIAL_STATE = []


export const filters = createReducer(INITIAL_STATE, {
  GET_FILTERS: (state, action) => {
    const { payload, error } = action
    if (error) return state
    return payload
  },
})

import { defineAction as reduxDefine } from 'redux-define'

const REQUEST = ['PENDING', 'FULFILLED', 'REJECTED']

const defineAction = (type, subactions) => reduxDefine(type, subactions || REQUEST)

export default defineAction

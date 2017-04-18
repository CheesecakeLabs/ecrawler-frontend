const getActionName = name => name.toString().replace(/_PENDING|_REJECTED|_FULFILLED/, '')

export default getActionName

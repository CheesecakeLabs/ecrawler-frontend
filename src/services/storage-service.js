const storageService = (appPrefix = 'mazz-') => ({
  set(key, value) {
    localStorage.setItem(`${appPrefix}${key}`, JSON.stringify(value))
  },

  get(key) {
    const value = localStorage.getItem(`${appPrefix}${key}`)
    return JSON.parse(value)
  },
})


export default storageService

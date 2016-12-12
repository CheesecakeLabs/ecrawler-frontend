import filterService from './services'


export const getFilters = () => (
  (dispatch) => (
    filterService.list()
      .then(({ data }) => {
        dispatch({
          type: 'GET_FILTERS',
          payload: data,
        })
      }, (errorData) => {
        dispatch({
          type: 'GET_FILTERS',
          payload: errorData,
          error: true,
        })
      })
  )
)

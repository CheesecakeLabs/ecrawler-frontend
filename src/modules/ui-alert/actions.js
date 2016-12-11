export const SHOW_ALERT_LAYER = 'SHOW_ALERT_LAYER'
export const CLOSE_ALERT_LAYER = 'CLOSE_ALERT_LAYER'

export const showAlertLayer = (data) => ({
  type: SHOW_ALERT_LAYER,
  payload: data,
})

export const closeAlertLayer = () => ({
  type: CLOSE_ALERT_LAYER,
})

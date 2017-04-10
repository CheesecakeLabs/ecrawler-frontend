import React, { PropTypes } from 'react'
import moment from 'moment'


const DateLabel = ({ date, relative }) => {
  const fDate = moment(date, 'YYYY-MM-DDTHH:mm:ssZ')
  let dateLabel = 'Some time ago'

  if (relative) {
    dateLabel = fDate.fromNow()
  } else {
    dateLabel = fDate.format('MM/DD/YYYY')
  }

  return (
    <span>{dateLabel}</span>
  )
}

DateLabel.propTypes = {
  date: PropTypes.string.isRequired,
  relative: PropTypes.boolean,
}

DateLabel.defaultProps = {
  relative: false,
}

export default DateLabel

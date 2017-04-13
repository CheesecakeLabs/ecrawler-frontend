import React, { PropTypes } from 'react'
import moment from 'moment'


const DateLabel = ({ date }) => {
  const dateFMT = moment(date, 'YYYY-MM-DDTHH:mm:ssZ')
  const relativeDate = dateFMT.fromNow()

  return (
    <span>{relativeDate}</span>
  )
}

DateLabel.propTypes = {
  date: PropTypes.string.isRequired,
}

export default DateLabel

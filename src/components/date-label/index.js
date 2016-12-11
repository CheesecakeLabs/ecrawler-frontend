import React, { PropTypes } from 'react'
import moment from 'moment'


const DateLabel = (props) => {
  const fDate = moment(props.date, 'YYYY-MM-DDTHH:mm:ssZ')
  let dateLabel = 'Some time ago'

  if (props.relative) {
    dateLabel = fDate.fromNow()
  } else {
    dateLabel = fDate.format('MM/DD/YYYY')
  }

  return (
    <span className={props.className}>
      {dateLabel}
    </span>
  )
}

DateLabel.propTypes = {
  className: PropTypes.string,
  relative: PropTypes.boolean,
  date: PropTypes.string.isRequired,
}


export default DateLabel

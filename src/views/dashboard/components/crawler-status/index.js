import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { GET_FILTERS } from '../../../../modules/filters/actions'
import styles from './styles.css'

const mapStateToProps = ({ loading }) => (
  { pending: !!loading.get(GET_FILTERS.ACTION) }
)

const CrawlerStatus = ({ pending }) => {
  let notificationText
  const classes = [styles.notification]
  if (pending) {
    notificationText = 'UPDATING DASHBOARD - please wait'
  } else {
    notificationText = 'DASHBOARD IS UP TO DATE'
    classes.push(styles.done)
  }

  return (
    <section className={classes.join(' ')} >
      {notificationText}
    </section>
  )
}

CrawlerStatus.propTypes = {
  pending: PropTypes.bool.isRequired,
}

export default connect(mapStateToProps)(CrawlerStatus)

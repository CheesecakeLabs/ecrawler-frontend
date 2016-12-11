import React, { PropTypes } from 'react'

import DateLabel from '../date-label'

import styles from './styles.css'


const EntityCard = (props) => (
  <div className={styles.container}>
    <div className={styles.name}>
      {props.name}
    </div>
    <div className={styles.date}>
      <DateLabel date={props.date} relative />
    </div>
  </div>
)

EntityCard.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}


export default EntityCard

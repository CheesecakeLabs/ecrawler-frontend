import React, { PropTypes } from 'react'

import DateLabel from '../../../../components/date-label'

import styles from './styles.css'


const FilterCard = (props) => (
  <div className={styles.container}>
    <div className={styles.name}>
      {props.name}
    </div>
    <div className={styles.date}>
      {props.date
        ? <DateLabel date={props.date} relative />
        : 'No emails so far'
      }
    </div>
  </div>
)

FilterCard.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string,
  total: PropTypes.integer,
}


export default FilterCard

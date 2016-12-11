import React from 'react'

import FilterCard from './components/filter-card'

import styles from './styles.css'

const propsFilters = [
  { id: 1, name: 'Cheesecake Labs', date: '2016-12-06T12:00:00Z' },
  { id: 2, name: 'SingularityU', date: '2016-11-06T12:00:00Z' },
  { id: 3, name: 'Lockitron', date: '2016-10-06T12:00:00Z' },
  { id: 4, name: 'Forgetter', date: '2016-09-06T12:00:00Z' },
  { id: 5, name: 'Menud', date: '2016-08-06T12:00:00Z' },
  { id: 6, name: 'Médico na Hora', date: '2016-07-06T12:00:00Z' },
  { id: 7, name: 'Fishbit', date: '2016-06-06T12:00:00Z' },
  { id: 8, name: 'Bond', date: '2016-05-06T12:00:00Z' },
]


const FiltersGrid = () => {
  const renderFilters = (filters) => (
    filters.map((filter) => (
      <div className={styles.item} key={filter.id}>
        <FilterCard name={filter.name} date={filter.date} />
      </div>
    ))
  )

  return (
    <section className={styles.grid}>
      {propsFilters &&
        renderFilters(propsFilters)
      }
    </section>
  )
}


export default FiltersGrid

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { getFilters, runCrawler, GET_FILTERS } from '../../modules/filters/actions'
import FilterCard from './components/filter-card'

import styles from './styles.css'


const mapStateToProps = ({ filters, userCreated, loading }) => ({
  filters,
  userCreated,
  isCrawlerRunning: !!loading.get(GET_FILTERS.ACTION),
})

const mapDispatchToProps = {
  getFilters,
  runCrawler,
}

@connect(mapStateToProps, mapDispatchToProps)
class Dashboard extends Component {

  componentWillMount() {
    this.props.getFilters()
    this.props.runCrawler()
  }

  render() {
    const renderUserCreatedMessage = () => (
      <section className={styles.userCreated}>
        <strong>YOUR ACCOUNT WAS CREATED</strong>
        <small>Check your mail for credentials and more information</small>
      </section>
    )

    const renderCrawlerStatus = (isLoading) => (
      <section className={`${styles.crawler} ${isLoading ? styles.crawlerRunning : styles.crawlerDone}`} />
    )

    const renderFilters = filters => (
      filters.map(filter => (
        <div className={styles.item} key={filter.name}>
          <FilterCard
            name={filter.name}
            date={filter.last_mail_date}
            total={filter.total_mails}
          />
        </div>
      ))
    )
    const filters = (Array.isArray(this.props.filters) && this.props.filters) || []

    return (
      <article>
        <section>
          { this.props.userCreated ? renderUserCreatedMessage() : null }
          { filters.length ? renderCrawlerStatus(this.props.isCrawlerRunning) : null }
        </section>
        <section className={styles.grid}>
          { renderFilters(filters) }
        </section>
      </article>
    )
  }
}

Dashboard.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    last_mail_date: PropTypes.string,
    total_mails: PropTypes.number,
  })).isRequired,
  getFilters: PropTypes.func.isRequired,
  runCrawler: PropTypes.func.isRequired,
  userCreated: PropTypes.bool.isRequired,
  isCrawlerRunning: PropTypes.bool.isRequired,
}

Dashboard.defaultProps = {
  filters: [],
  getFilters,
  runCrawler,
}


export default Dashboard

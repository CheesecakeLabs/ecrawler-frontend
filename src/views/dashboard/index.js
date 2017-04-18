import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { getFilters, runCrawler } from '../../modules/filters/actions'
import FilterCard from './components/filter-card'
import CrawlerStatus from './components/crawler-status'

import styles from './styles.css'


const mapStateToProps = ({ filters, userCreated }) => ({
  filters,
  userCreated,
})

const mapDispatchToProps = {
  getFilters,
  runCrawler,
}

@connect(mapStateToProps, mapDispatchToProps)
class Dashboard extends Component {

  static propTypes = {
    filters: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      last_mail_date: PropTypes.string,
      total_mails: PropTypes.number,
    })).isRequired,
    getFilters: PropTypes.func.isRequired,
    runCrawler: PropTypes.func.isRequired,
    userCreated: PropTypes.bool,
  }

  static defaultProps = {
    userCreated: false,
  }

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

    return (
      <article>
        <section>
          { this.props.userCreated ? renderUserCreatedMessage() : null }
          { this.props.filters.length ? <CrawlerStatus /> : null }
        </section>
        <section className={styles.grid}>
          { renderFilters(this.props.filters) }
        </section>
      </article>
    )
  }
}

export default Dashboard

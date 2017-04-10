import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { getFilters, runCrawler } from '../../modules/filters/actions'
import FilterCard from './components/filter-card'

import styles from './styles.css'


const mapStateToProps = ({ filters }) => (
  { filters }
)

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
      <section className={styles.grid}>
        <button value="Crawl" onClick={this.onClickHandler} />
        { renderFilters(this.props.filters || []) }
      </section>
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
  runCrawler: PropTypes.func,
}

Dashboard.defaultProps = {
  filters: [],
  getFilters,
  runCrawler,
}


export default Dashboard

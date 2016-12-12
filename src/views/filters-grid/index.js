import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import autobind from 'autobind-decorator'

import { getFilters } from '../../modules/filters/actions'
import FilterCard from './components/filter-card'

import styles from './styles.css'


const mapStateToProps = (state) => {
  const { filters } = state
  return { filters }
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    getFilters,
  }, dispatch)
)

@connect(mapStateToProps, mapDispatchToProps)
class FiltersGrid extends Component {

  @autobind
  componentWillMount() {
    this.props.getFilters()
  }

  @autobind
  render() {
    const renderFilters = (filters) => (
      filters.map((filter) => (
        <div className={styles.item} key={filter.id}>
          <FilterCard name={filter.name} date={filter.date} />
        </div>
      ))
    )

    return (
      <section className={styles.grid}>
        {this.props.filters &&
          renderFilters(this.props.filters)
        }
      </section>
    )
  }
}

FiltersGrid.propTypes = {
  filters: PropTypes.array.isRequired,
  getFilters: PropTypes.func.isRequired,
}


export default FiltersGrid

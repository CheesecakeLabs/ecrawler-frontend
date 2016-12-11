import React, { PropTypes } from 'react'
import styles from './styles.css'


const Loader = (props) => {
  const {
    children,
    isLoaded,
    className,
  } = props

  const renderLoader = () => (
    <div className={styles.loaderContainer}>
      <span>Loading...</span>
    </div>
  )

  return (
    <div className={className}>
      {isLoaded ? children : renderLoader()}
    </div>
  )
}

Loader.propTypes = {
  children: PropTypes.node.isRequired,
  isLoaded: PropTypes.bool.isRequired,
  className: PropTypes.string,
}

export default Loader

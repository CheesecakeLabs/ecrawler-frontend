import React, { PropTypes } from 'react'
import styles from './styles.css'

const App = (props) => (
  <div className={styles.page}>
    {props.children}
  </div>
)

App.propTypes = {
  children: PropTypes.node,
}

export default App

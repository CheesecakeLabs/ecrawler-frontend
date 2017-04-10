import React, { PropTypes } from 'react'

import Navbar from '../../components/navbar'

import styles from './styles.css'


const App = props => (
  <div className={styles.page}>
    <Navbar />
    {props.children}
  </div>
)

App.propTypes = {
  children: PropTypes.node,
}

App.defaultProps = {
  children: null,
}

export default App

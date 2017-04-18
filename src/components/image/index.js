import React, { PropTypes } from 'react'
import styles from './styles.css'


const Image = props => (
  <img
    className={styles.img}
    src={props.src}
    width={props.width}
    height={props.height}
    alt={props.alt}
  />
)

Image.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  alt: PropTypes.string,
}

Image.defaultProps = {
  width: null,
  height: null,
  alt: 'This is an image',
}

export default Image

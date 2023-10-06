import React from 'react'
import styles from './Button.module.css'

const Button = ({ onClick, id, children }) => {
  return (
    <button onClick={onClick} id={id} className={styles.button}>
      {children}
    </button>
  )
}

export default Button

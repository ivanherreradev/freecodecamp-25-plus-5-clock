import React from 'react'
import Button from '../Button/Button'
import styles from './Break.module.css'

const Break = ({ breakLength }) => {
  return (
    <aside className={styles.breakLength}>
      <h3 id="break-label">Break Length</h3>
      <strong id="break-length" className={styles.breakLengthStrong}>
        {breakLength}
      </strong>
      <div>
        <Button id="break-increment">Increase</Button>
        <Button id="break-decrement">Decrease</Button>
      </div>
    </aside>
  )
}

export default Break

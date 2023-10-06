import React from 'react'
import Button from '../Button/Button'
import styles from './Break.module.css'

const Break = ({ breakLength, incrementBreak, decrementBreak }) => {
  return (
    <aside className={styles.breakLength}>
      <h3 id="break-label">Break Length</h3>
      <strong id="break-length" className={styles.breakLengthStrong}>
        {breakLength}
      </strong>
      <div>
        <Button id="break-increment" onClick={incrementBreak}>
          Increase
        </Button>
        <Button id="break-decrement" onClick={decrementBreak}>
          Decrease
        </Button>
      </div>
    </aside>
  )
}

export default Break

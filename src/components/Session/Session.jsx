import React from 'react'
import Button from '../Button/Button'
import styles from './Session.module.css'

const Session = ({ sessionLength }) => {
  return (
    <aside className={styles.sessionLength}>
      <h3 id="session-label">Session Length</h3>
      <strong id="session-length" className={styles.sessionLengthStrong}>
        {sessionLength}
      </strong>
      <div>
        <Button id="session-increment">Increase</Button>
        <Button id="session-decrement">Decrease</Button>
      </div>
    </aside>
  )
}

export default Session

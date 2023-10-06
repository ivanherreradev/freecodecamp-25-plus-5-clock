import React from 'react'
import Button from '../Button/Button'
import styles from './Timer.module.css'

const Timer = ({ title, formattedTime }) => {
  return (
    <section className={styles.timerContainer}>
      <div className={styles.timer}>
        <h2 id="timer-label">{title}</h2>
        <h3 id="time-left">{formattedTime}</h3>
      </div>
    </section>
  )
}

export default Timer

import React, { useState } from 'react'
import Timer from './components/Timer/Timer'
import Button from './components/Button/Button'
import Break from './components/Break/Break'
import Session from './components/Session/Session'
import { timeFormatter } from './utils/helpers/timeFormatter'
import './App.css'

const App = () => {
  const [timingType, setTimingtype] = useState('SESSION')
  const [timeLeft, seTtimeLeft] = useState(60 * 25)
  const [breakLength, setBreakLength] = useState(5)
  const [sessionLength, setSessionLength] = useState(25)

  const incrementBreak = () => {
    if (breakLength < 60) {
      setBreakLength(breakLength + 1)
    }
  }

  const decrementBreak = () => {
    if (breakLength > 1) {
      setBreakLength(breakLength - 1)
    }
  }

  const formattedTime = timeFormatter(timeLeft)
  return (
    <main>
      <Break
        breakLength={breakLength}
        incrementBreak={incrementBreak}
        decrementBreak={decrementBreak}
      />
      <article>
        <Timer title={timingType} formattedTime={formattedTime} />
        <Button id="start_stop">Stop/Start</Button>
        <Button id="reset">Reset</Button>
      </article>
      <Session sessionLength={sessionLength} />
    </main>
  )
}

export default App

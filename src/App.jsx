import React, { useState } from 'react'
import Timer from './components/Timer/Timer'
import Button from './components/Button/Button'
import { timeFormatter } from './utils/helpers/timeFormatter'
import './App.css'

const App = () => {
  const [timingType, setTimingtype] = useState('SESSION')
  const [timeLeft, seTtimeLeft] = useState(60 * 25)

  const formattedTime = timeFormatter(timeLeft)
  return (
    <main>
      <article>
        <Timer title={timingType} formattedTime={formattedTime}/>
        <Button id="start_stop">Stop/Start</Button>
        <Button id="reset">Reset</Button>
      </article>
    </main>
  )
}

export default App

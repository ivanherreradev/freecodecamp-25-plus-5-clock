import React, { useEffect, useState } from 'react'
import Timer from './components/Timer/Timer'
import Button from './components/Button/Button'
import Break from './components/Break/Break'
import Session from './components/Session/Session'
import { timeFormatter } from './utils/helpers/timeFormatter'
import './App.css'

const App = () => {
  const [timingType, setTimingType] = useState('SESSION')
  const [timeLeft, setTimeLeft] = useState(60 * 25)
  const [breakLength, setBreakLength] = useState(5)
  const [sessionLength, setSessionLength] = useState(25)
  const [play, setPlay] = useState(false)

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

  const incrementSession = () => {
    if (sessionLength < 60) {
      setSessionLength(sessionLength + 1)
      setTimeLeft(timeLeft + 60)
    }
  }

  const decrementSession = () => {
    if (sessionLength > 1) {
      setSessionLength(sessionLength - 1)
      setTimeLeft(timeLeft - 60)
    }
  }

  const timeout = setTimeout(() => {
    if (timeLeft && play) {
      setTimeLeft(timeLeft - 1)
    }
  }, 100)

  const handlePlay = () => {
    clearTimeout(timeout)
    setPlay(!play)
  }

  const handleReset = () => {
    clearTimeout(timeout)
    setPlay(false)
    setTimeLeft(1500)
    setBreakLength(5)
    setSessionLength(25)
    setTimingType('SESSION')
    const audio = document.getElementById('beep')
    audio.pause()
    audio.currentTime = 0
  }

  const resetTimer = () => {
    const audio = document.getElementById('beep')

    if (!timeLeft && timingType === 'SESSION') {
      setTimeLeft(breakLength * 60)
      setTimingType('BREAK')
      audio.play()
    }

    if (!timeLeft && timingType === 'BREAK') {
      setTimeLeft(sessionLength * 60)
      setTimingType('SESSION')
      audio.pause()
      audio.currentTime = 0
    }
  }

  const clock = () => {
    if (play) {
      timeout
      resetTimer()
    } else {
      clearTimeout(timeout)
    }
  }

  const formattedTime = timeFormatter(timeLeft)
  const audio = new Audio(
    'https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav'
  )

  useEffect(() => {
    clock()
  }, [play, timeLeft, timeout])

  return (
    <main>
      <Break
        breakLength={breakLength}
        incrementBreak={incrementBreak}
        decrementBreak={decrementBreak}
      />
      <article>
        <Timer title={timingType} formattedTime={formattedTime} />
        <Button id="start_stop" onClick={handlePlay}>
          {play ? 'Stop' : 'Start'}
        </Button>
        <Button id="reset" onClick={handleReset}>
          Reset
        </Button>
      </article>
      <Session
        sessionLength={sessionLength}
        incrementSession={incrementSession}
        decrementSession={decrementSession}
      />
      <audio id="beep" preload="auto" src={audio.src} />
    </main>
  )
}

export default App

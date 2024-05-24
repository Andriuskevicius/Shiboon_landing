import React, { useState, useEffect } from 'react'
import './clock.sass'

const CountDown = ({ difference }) => {
  const calculateTimeLeft = () => {
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hrs: Math.floor((difference / (1000 * 60 * 60)) % 24),
        mins: Math.floor((difference / 1000 / 60) % 60)
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
  })

  const timerComponents = []

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return
    }

    timerComponents.push(
      <div className="counterBlocksInner">
        <div><span className="number">{timeLeft[interval]}</span> <span className="name">{interval}{' '}</span></div>
      </div>
    )
  })

  return (
    <div className="counterBlocksRow">
        {timerComponents.length ? timerComponents : <div className="containerInner"><span>Timer finished</span></div>}
    </div>
  )
}

export default CountDown

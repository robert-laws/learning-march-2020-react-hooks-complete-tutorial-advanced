import React, { useState, useEffect, useRef } from 'react'

export const MyTimer = () => {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1)
    }, 1000);

    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <div>
      Timer - {timer}
      <br/>
      <button onClick={() => clearInterval(intervalRef.current)}>CLear Timer</button>
    </div>
  )
}

import { useState } from "react"
import Button from "../Button/Button"

const Control = ({ onStart, onReset, onStop }) => {
  const [hideStart, setHideStart] = useState(false)

  const handleStart = () => {
    setHideStart(true)
    onStart()
  }

  const handleStop = () => {
    onStop()
  }

  const handleReset = () => {
    setHideStart(false)
    onReset()
  }

  return (
    <div>
      {!hideStart ? (
        <Button title="Start" onClick={handleStart} />
      ) : (
        <Button title="Reset" onClick={handleReset} />
      )}
      <Button title="Stop" onClick={handleStop} />
    </div>
  )
}

export default Control

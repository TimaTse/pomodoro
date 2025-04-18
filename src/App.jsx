import { useEffect, useState } from "react"
import "./App.css"
import Time from "./components/Time/Time"
import Setting from "./components/SettingComp/Setting"
import Control from "./components/Control/Control"
import useAudio from "./hooks/useAudio"

function App() {
  const INIT_TIME = 600
  const alarm = "./alarm.mp3"
  const [isStart, setIsStart] = useState(false)
  const [time, setTime] = useState(INIT_TIME)
  const [userTime, setUserTime] = useState(0)
  const [player, toggle] = useAudio(alarm)

  useEffect(() => {
    if (!isStart) return

    const timer = setInterval(() => {
      setTime((prev) => {
        if (prev === 0) {
          clearInterval(timer)
          toggle()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [isStart])

  const onStart = () => setIsStart(true)

  const onStop = () => setIsStart(false)

  const onReset = () => {
    setIsStart(false)
    setTime(userTime === 0 ? INIT_TIME : userTime)
  }

  const onSetTime = (newTime) => {
    setIsStart(false)
    setTime(newTime)
    setUserTime(newTime) // store
  }

  return (
    <div className="app-container">
      <Setting setTime={onSetTime} />
      <Time time={time} />
      <Control onStart={onStart} onReset={onReset} onStop={onStop} />
    </div>
  )
}

export default App

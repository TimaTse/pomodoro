import { useState } from "react"
import Button from "../Button/Button"
import { createPortal } from "react-dom"
import "./Setting.css"

// https://react.dev/reference/react-dom/createPortal#usage
const Setting = ({ setTime }) => {
  const [showModal, setShowModal] = useState(false)

  const onShowModal = () => {
    setShowModal(true)
  }
  const onCloseModal = () => {
    setShowModal(false)
  }

  return (
    <>
      <Button title="Settings" onClick={onShowModal} />
      {showModal &&
        createPortal(
          <SettingModal onClose={onCloseModal} setTime={setTime} />,
          document.body
        )}
    </>
  )
}

const SettingModal = ({ onClose, setTime }) => {
  const [minutes, setMinutes] = useState("")

  const onTimeChange = (e) => {
    setMinutes(e.target.value)
  }

  const onSave = () => {
    const parsed = parseInt(minutes)
    if (!isNaN(parsed)) {
      setTime(parsed * 60)
      onClose()
    }
  }

  return (
    <div className="modal">
      <div className="time-container">
        <label htmlFor="timer">Timer (minutes):</label>
        <input
          type="number"
          id="timer"
          name="timer"
          min={1}
          value={minutes}
          onChange={onTimeChange}
        />
      </div>
      <div className="button-container">
        <Button title="Save" onClick={onSave} />
        <Button title="Close" onClick={onClose} />
      </div>
    </div>
  )
}

export default Setting

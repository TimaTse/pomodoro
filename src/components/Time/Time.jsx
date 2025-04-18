import "./Time.css"

const Time = ({ time }) => {
  return (
    <div>
      <p>
        {`${Math.floor(time / 60)}`.padStart(2, "0")}:
        {`${time % 60}`.padStart(2, "0")}
      </p>
    </div>
  )
}

export default Time

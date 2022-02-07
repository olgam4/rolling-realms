import { useState } from 'react'
import { FaTimes, FaWineBottle } from 'react-icons/fa'

import style from './style.module.css'

type GlassProps = {
  value: number
}

const pickRandomWine = () => {
  const wines = [
    <FaWineBottle color="#580000" />,
    <FaWineBottle color="#F1F285" />,
  ]
  const randomIndex = Math.floor(Math.random() * wines.length)
  return wines[randomIndex]
}

const Glass = ({ value }: GlassProps) => {
  const [wine] = useState(pickRandomWine)
  const [marked, setMarked] = useState(false)
  
  const toggleMark = () => setMarked(!marked)

  return (
    <div className={style.glass} onClick={toggleMark}>
      {`${value}`} {wine}
      {marked &&
        <div className={style.cross}>
          <FaTimes size="22px" color="#C21807" />
        </div>
      }
    </div>
  )
}

export default Glass

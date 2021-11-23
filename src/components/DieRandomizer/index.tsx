import { useState } from 'react'
import Die from '../Die'

import style from './style.module.css'

const DieRandomizer = () => {
  const [firstDie, setFirstDie] = useState(1)
  const [secondDie, setSecondDie] = useState(1)

  const roll = () => {
    setFirstDie(Math.floor(Math.random() * 6) + 1)
    setSecondDie(Math.floor(Math.random() * 6) + 1)
  }

  return (
    <div onClick={roll} className={style.roller}>
      <Die value={firstDie} disabled />
      <Die value={secondDie} disabled />
    </div>
  )
}

export default DieRandomizer

import { useState } from 'react'

import style from './style.module.css'

const Box = () => {
  const [marked, setMarked] = useState(false)

  const mark = () => {
    setMarked(!marked)
  }

  return (
    <div className={style.box} onClick={mark}>
      {marked ? '⬛️' : '📦'}
    </div>
  )
}

export default Box

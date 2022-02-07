import { useState } from 'react'
import { GiCardboardBoxClosed } from 'react-icons/gi'
import { FaBoxOpen } from 'react-icons/fa'

import style from './style.module.css'

const Box = () => {
  const [marked, setMarked] = useState(false)

  const mark = () => {
    setMarked(!marked)
  }

  return (
    <div className={style.box} onClick={mark}>
      {marked ? <FaBoxOpen /> : <GiCardboardBoxClosed />}
    </div>
  )
}

export default Box

import { useState } from 'react'
import { GiCardboardBoxClosed } from 'react-icons/gi'
import { BsSquareFill } from 'react-icons/bs'

import style from './style.module.css'

const Box = () => {
  const [marked, setMarked] = useState(false)

  const mark = () => {
    setMarked(!marked)
  }

  return (
    <div className={style.box} onClick={mark}>
      {marked ? <BsSquareFill /> : <GiCardboardBoxClosed />}
    </div>
  )
}

export default Box

import { useState } from 'react'

import style from './style.module.css'

type StarProps = {
  disabled?: boolean
  key?: number
}

const Star = ({ disabled = false }: StarProps) => {
  const [isMarked, updateMark] = useState(false)
  
  const mark = () => {
    if (disabled) return
    updateMark(!isMarked)
  }

  const star = disabled ? '🌟' : isMarked ? '🌟' : '⚫️'

  return (
    <div className={style.star} onClick={mark}>{star}</div>
  )
}

export default Star

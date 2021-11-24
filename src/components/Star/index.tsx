import { useState } from 'react'

import style from './style.module.css'

type StarProps = {
  disabled?: boolean
  key?: number
  requirement?: '4-10'
}

const Star = ({ disabled, requirement }: StarProps) => {
  const [isMarked, updateMark] = useState(false)
  
  const mark = () => {
    if (disabled) return
    updateMark(!isMarked)
  }

  const star = disabled ? '🌟' : isMarked ? '🌟' : '⚫️'

  return (
    <div className={style.star} onClick={mark}>
      {requirement}
      {star}
    </div>
  )
}

export default Star

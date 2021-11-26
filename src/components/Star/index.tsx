import { useState } from 'react'

import style from './style.module.css'

type StarProps = {
  disabled?: boolean
  requirement?: '4-10'
  onMark?: () => void
  onDemark?: () => void
}

const Star = ({ disabled, requirement, onMark, onDemark }: StarProps) => {
  const [isMarked, updateMark] = useState(false)
  
  const mark = () => {
    if (disabled) return
    isMarked ? onDemark && onDemark() : onMark && onMark()
    updateMark(!isMarked)

  }

  const star = disabled ? '🌟' : isMarked ? '🌟' : '⚫️'

  return (
    <div className={`${style.star} ${!disabled && style.interactive}`} onClick={mark}>
      {requirement}
      {star}
    </div>
  )
}

export default Star

import { useState } from 'react'
import { BsStar, BsStarFill } from 'react-icons/bs'

import style from './style.module.css'

type StarProps = {
  disabled?: boolean
  requirement?: '4-10'
  onMark?: () => void
  onDemark?: () => void
}

const renderStar = (disabled: boolean) => {
  return (
    <span>
      { disabled && <div className={style.starGlow} /> }
      <BsStarFill color="#FFF070" />
    </span>
  )
}

const Star = ({ disabled, requirement, onMark, onDemark }: StarProps) => {
  const [isMarked, updateMark] = useState(false)
  
  const mark = () => {
    if (disabled) return
    isMarked ? onDemark && onDemark() : onMark && onMark()
    updateMark(!isMarked)

  }

  const disabledStar = renderStar(!disabled)

  const star = disabled ? disabledStar : isMarked ? disabledStar : <BsStar />

  return (
    <div className={`${style.star} ${!disabled && style.interactive} ${requirement && style.requirement}`} onClick={mark}>
      {requirement}
      {star}
    </div>
  )
}

export default Star

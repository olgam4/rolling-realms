import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'

import Resource, { ResourceProps } from '../Resource'

import style from './style.module.css'

type DieProps = {
  resource?: ResourceProps['type']
  value: number
  disabled?: boolean
  crossable?: boolean
}

const Die = ({ resource, value, crossable=false, disabled=false }: DieProps) => {
  const [isMarked, updateMark] = useState(false)
  const [isCrossed, updateCross] = useState(false)

  const mark = () => {
    if (disabled) return
    if (isCrossed) {
      updateMark(!isMarked)
      updateCross(!isCrossed)
      return
    }
    if (crossable && isMarked) {
      updateCross(!isCrossed)
      return
    }
    updateMark(!isMarked)
  }

  let dieValue = ``
  switch (value) {
    case 1:
      dieValue += `${style.die1}`
      break
    case 2:
      dieValue += `${style.die2}`
      break
    case 3:
      dieValue += `${style.die3}`
      break
    case 4:
      dieValue += `${style.die4}`
      break
    case 5:
      dieValue += `${style.die5}`
      break
    case 6:
      dieValue += `${style.die6}`
      break
    default:
      dieValue += `${style.die1}`
  }

  const markedClass = isMarked ? `${style.marked}` : ``

  return (
    <span className={style.column}>
      <div className={`${style.die} ${dieValue} ${markedClass}`} onClick={mark}/ >
      { resource &&
        <div className={style.resource}>
          <Resource type={resource} />
          {isCrossed &&
            <div className={style.cross}>
              <FaTimes size="22px" color="#C21807" />
            </div>
          }
        </div>
      }
    </span>
  )
}

export default Die

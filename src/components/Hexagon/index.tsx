import { useState } from 'react'

import style from './style.module.css'

type HexagonProps = {
  children: React.ReactElement
  interactive?: boolean
}

const Hexagon = ({ children, interactive }: HexagonProps) => {
  const [isMarked, setIsMarked] = useState(false)

  const mark = () => {
    if (!interactive) return
    setIsMarked(!isMarked)
  }

  return (
    <div
      className={`${style.hexagon} ${interactive && style.interactive} ${isMarked && style.marked}`}
      onClick={mark}
    >
      <div className={style.content}>
        {children}
      </div>
    </div>
  )
}

export default Hexagon

import { ReactElement } from 'react'

import Die from '../Die'
import Hexagon from '../Hexagon'

import style from './style.module.css'

type HexagonPackProps = {
  children: ReactElement
}

const HexagonPack = ({ children }: HexagonPackProps) => {
  const renderRow = (data: Array<number | ReactElement>) => {
    return data.map((value) => (
      <Hexagon>
        {typeof value === 'number' ?
          <Die value={value} /> :
          children
        }
      </Hexagon>
    ))
  }

  return (
    <div>
      <div className={style.firstRow}>
        {renderRow([6, 1])}
      </div>
      <div className={style.secondRow}>
        {renderRow([5, children, 2])}
      </div>
      <div className={style.thirdRow}>
        {renderRow([4, 3])}
      </div>
    </div>
  )
}

export default HexagonPack

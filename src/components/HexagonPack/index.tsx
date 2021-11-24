import Die from '../Die'
import Hexagon from '../Hexagon'

import style from './style.module.css'

type HexagonPackProps = {
  children: React.ReactElement
}

const HexagonPack = ({ children }: HexagonPackProps) => {
  return (
    <div>
      <div className={style.firstRow}>
        <Hexagon>
          <Die value={6} />
        </Hexagon>
        <Hexagon>
          <Die value={1} />
        </Hexagon>
      </div>
      <div className={style.secondRow}>
        <Hexagon>
          <Die value={5} />
        </Hexagon>
        <Hexagon>
          {children}
        </Hexagon>
        <Hexagon>
          <Die value={2} />
        </Hexagon>
      </div>
      <div className={style.thirdRow}>
        <Hexagon>
          <Die value={4} />
        </Hexagon>
        <Hexagon>
          <Die value={3} />
        </Hexagon>
      </div>
    </div>
  )
}

export default HexagonPack

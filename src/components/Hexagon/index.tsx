import style from './style.module.css'

type HexagonProps = {
  children: React.ReactElement
}

const Hexagon = ({ children }: HexagonProps) => {
  return (
    <div className={style.hexagon}>
      <div className={style.content}>
        {children}
      </div>
    </div>
  )
}

export default Hexagon

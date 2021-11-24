import style from './style.module.css'

type HexagonProps = {
  children: React.ReactElement
}

const Hexagon = ({ children }: HexagonProps) => {
  return (
    <div className={style.hexagon}>
      {children}
    </div>
  )
}

export default Hexagon

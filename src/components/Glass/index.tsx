import style from './style.module.css'

type GlassProps = {
  value: number
}

const Glass = ({ value }: GlassProps) => {
  return (
    <div className={style.glass}>
      {`${value} 🍷`}
    </div>
  )
}

export default Glass

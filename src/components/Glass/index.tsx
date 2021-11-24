import Star from '../Star'

import style from './style.module.css'

type GlassProps = {
  value: number
}

const Glass = ({ value }: GlassProps) => {
  return (
    <div className={style.glass}>
      {`${value} 🍷`}
      <div className={style.stars}>
        <Star disabled />
        <Star disabled />
      </div>
    </div>
  )
}

export default Glass

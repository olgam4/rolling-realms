import { FaWineBottle } from 'react-icons/fa'

import style from './style.module.css'

type GlassProps = {
  value: number
}

const Glass = ({ value }: GlassProps) => {
  return (
    <div className={style.glass}>
      {`${value}`} <FaWineBottle />
    </div>
  )
}

export default Glass

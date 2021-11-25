import { times } from 'lodash'

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
        {times(2, () =><Star disabled />)}
      </div>
    </div>
  )
}

export default Glass

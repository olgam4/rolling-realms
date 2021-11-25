import { useState } from 'react'

import Resource, { ResourceProps } from '../Resource'
import Star from '../Star'

import style from './style.module.css'

type DieInputProps = {
  big?: boolean
  resource?: ResourceProps['type'] | 'star'
}

const pickClassname = (big: boolean) => {
  if (big) {
    return style.big
  }
  return style.small
}

const DieInput = ({ big=false, resource }: DieInputProps) => {
  const [score, updateScore] = useState<number | string>('')

  const onScoreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const intScore = parseInt(event.target.value, 10)
    if (isNaN(intScore)) {
      updateScore('')
      return
    }
    updateScore(intScore)
  }

  const className = pickClassname(big)

  return (
    <div className={style.dieInput}>
      <input
        className={`${className} ${style.input}`}
        value={score}
        onChange={onScoreChange}
      />
      <div className={style.resource}>
        {resource !== undefined? resource === 'star'?
          <Star disabled /> :
          <Resource type={resource} />
          : null
        }
      </div>
    </div>
  )
}

export default DieInput

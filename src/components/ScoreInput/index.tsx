import { useState } from 'react'
import Star from '../Star'

import style from './style.module.css'

type Props = {
  score?: number
  disabled?: boolean
}

const ScoreInput = ({ score, disabled }: Props) => {
  const defaultScore = disabled ? score : ''
  const [inputScore, updateScore] = useState<number | string>(defaultScore || '')

  const onScoreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    updateScore(event.target.value)
  }

  const onScoreInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const floatScore = parseFloat(event.target.value.replace(',', '.'))
    if (isNaN(floatScore)) {
      updateScore('')
      return
    }
    updateScore(floatScore)
  }

  return (
    <div className={style.scoreInput}>
      <div className={style.customInput}>
        {disabled ?
          <div className={style.score}>{score?.toFixed(1)}</div>:
          <input 
            value={inputScore}
            onChange={onScoreChange}
            onBlur={onScoreInput}
            type="text"
            className={style.input}
          />
        }
        <div className={style.line} />
      </div>
      <Star disabled />
    </div>
  )
}

export default ScoreInput

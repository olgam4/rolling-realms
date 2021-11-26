import { useState } from 'react'

import useScore from '../../hooks/useScore'

import Star from '../Star'

import style from './style.module.css'

type Props = {
  disabled?: boolean
  roundNumber?: 1 | 2 | 3
}

const ScoreInput = ({ disabled, roundNumber }: Props) => {
  const { score } = useScore(roundNumber)
  const [inputScore, updateScore] = useState<number | string>(score)

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
          <div className={style.score}>{Math.abs(score).toFixed(1)}</div>:
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

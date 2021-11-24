import { useState } from 'react'
import Star from '../Star'

import style from './style.module.css'

const ScoreInput = () => {
  const [score, updateScore] = useState<number | string>('')

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
        <input 
          value={score}
          onChange={onScoreChange}
          onBlur={onScoreInput}
          type="text"
          className={style.input}
        />
        <div className={style.line} />
      </div>
      <Star disabled />
    </div>
  )
}

export default ScoreInput

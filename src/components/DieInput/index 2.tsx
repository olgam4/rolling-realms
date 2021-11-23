import { useState } from 'react'

import style from './style.module.css'

const DieInput = () => {
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

  return (
    <div>
      <input
        className={style.input}
        value={score}
        onChange={onScoreChange}
      />
    </div>
  )
}

export default DieInput

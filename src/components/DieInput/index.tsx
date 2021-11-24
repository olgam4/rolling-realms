import { useState } from 'react'

import style from './style.module.css'

type DieInputProps = {
  big?: boolean
}

const pickClassname = (big: boolean) => {
  if (big) {
    return style.big
  }
  return style.small
}

const DieInput = ({ big=false }: DieInputProps) => {
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
    <div>
      <input
        className={className}
        value={score}
        onChange={onScoreChange}
      />
    </div>
  )
}

export default DieInput

import { times } from 'lodash'

import Star from '../Star'

import style from './style.module.css'

type Props = {
  incrementScore: () => void
  decrementScore: () => void
}

const Score = ({ incrementScore, decrementScore }: Props) => {
  return (
    <div className={`${style.score}`}>
      {times(6, (i) => (
        <Star
          onMark={incrementScore}
          onDemark={decrementScore}
          key={i}
        />
      ))}
    </div>
  )
}

export default Score

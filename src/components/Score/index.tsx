import { times } from 'lodash'
import useScore from '../../hooks/useScore'

import Star from '../Star'

import style from './style.module.css'

type Props = {
  roundNumber: 1 | 2 | 3
}

const Score = ({ roundNumber }: Props) => {
  const { decrementScore, incrementScore } = useScore(roundNumber)

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

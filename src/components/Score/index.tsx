import Star from '../Star'

import style from './style.module.css'

const Score = () => {
  const stars = []
  for (let i = 0; i < 6; i++) {
    stars.push(<Star key={i} />)
  }
  return (
    <div className={`${style.score}`}>
      {stars}
    </div>
  )
}

export default Score

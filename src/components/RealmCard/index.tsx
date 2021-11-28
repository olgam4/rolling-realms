import useRealms from '../../hooks/useRealms'
import RealmSelector from '../RealmSelector'
import Score from '../Score'

import style from './style.module.css'


type Props = {
  roundNumber: 1 | 2 | 3
  cardNumber: 1 | 2 | 3
}

const RealmCard = ({ cardNumber, roundNumber }: Props) => {
  const { r, realms } = useRealms(roundNumber)
  const realm = realms[cardNumber - 1]

  return (
    <div className={style.realm}>
      <RealmSelector cardNumber={cardNumber} roundNumber={roundNumber} />
      {r(`${realm}.component`)}
      <div className={style.score}>
        <Score roundNumber={roundNumber} />
      </div>
    </div>
  )
}

export default RealmCard

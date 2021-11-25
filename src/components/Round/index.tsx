import { useTranslation } from 'react-i18next'

import DieInput from '../DieInput'
import DieRandomizer from '../DieRandomizer'
import RealmSelector from '../RealmSelector'
import ResourceCounter from '../ResourceCounter'
import ScoreInput from '../ScoreInput'

import style from './style.module.css'

type RoundProps = {
  number: number
}

const Round = ({ number }: RoundProps) => {
  const { t } = useTranslation()

  return (
    <div className={style.round}>
      <div className={style.roundHeader}>
        <div className={style.roundInfo}>
          {`${t('round')} ${number}`}
          <ScoreInput />
        </div>
        <div className={style.turnsBox}>
          <div className={style.title}>{t('turns')}</div>
          <div className={style.turns}>
            <div>
              <div className={style.turn}>1 <DieInput /><DieInput /></div>
              <div className={style.turn}>4 <DieInput /><DieInput /></div>
              <div className={style.turn}>7 <DieInput /><DieInput /></div>
            </div>
            <div>
              <div className={style.turn}>2 <DieInput /><DieInput /></div>
              <div className={style.turn}>5 <DieInput /><DieInput /></div>
              <div className={style.turn}>8 <DieInput /><DieInput /></div>
            </div>
            <div>
              <div className={style.turn}>3<DieInput /><DieInput /></div>
              <div className={style.turn}>6<DieInput /><DieInput /></div>
              <div className={style.turn}>9<DieInput /><DieInput /></div>
            </div>
          </div>
        </div>
        <DieRandomizer />
        <ResourceCounter resource="pumpkin" />
        <ResourceCounter resource="heart" />
        <ResourceCounter resource="coin" />
      </div>
      <div className={style.realms}>
        <RealmSelector />
        <div className={style.divider}/>
        <RealmSelector />
        <div className={style.divider}/>
        <RealmSelector />
      </div>
    </div>
  )
}

export default Round

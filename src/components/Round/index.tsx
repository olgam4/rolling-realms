import { useTranslation } from 'react-i18next'

import DieInput from '../DieInput'
import DieRandomizer from '../DieRandomizer'
import RealmSelector from '../RealmSelector'
import { ResourceProps } from '../Resource'
import ResourceCounter from '../ResourceCounter'
import ScoreInput from '../ScoreInput'

import style from './style.module.css'

type RoundProps = {
  number: 1 | 2 | 3
}

const Round = ({ number }: RoundProps) => {
  const { t } = useTranslation()

  const renderResourceCounter = (resource: ResourceProps['type']) => (
    <ResourceCounter
      roundNumber={number}
      resource={resource}
    />
  )

  return (
    <div className={style.round}>
      <div className={style.roundHeader}>
        <div className={style.roundInfo}>
          {`${t('round')} ${number}`}
          <ScoreInput roundNumber={number} disabled />
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
        {renderResourceCounter('pumpkin')}
        {renderResourceCounter('heart')}
        {renderResourceCounter('coin')}
      </div>
      <div className={style.realms}>
        <RealmSelector roundNumber={number} />
        <div className={style.divider}/>
        <RealmSelector roundNumber={number} />
        <div className={style.divider}/>
        <RealmSelector roundNumber={number} />
      </div>
    </div>
  )
}

export default Round

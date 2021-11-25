import { useTranslation } from 'react-i18next'

import DieInput from '../DieInput'
import DieRandomizer from '../DieRandomizer'
import RealmSelector from '../RealmSelector'
import { ResourceProps } from '../Resource'
import ResourceCounter from '../ResourceCounter'
import ScoreInput from '../ScoreInput'

import { useRoundScore } from './hooks'

import style from './style.module.css'

type RoundProps = {
  number: number
}

const Round = ({ number }: RoundProps) => {
  const {
    score,
    incrementScore,
    decrementScore,
    advanceScore,
    backScore
  } = useRoundScore(0)
  const { t } = useTranslation()

  const renderResourceCounter = (resource: ResourceProps['type']) => (
    <ResourceCounter
      resource={resource}
      incrementScore={advanceScore}
      decrementScore={backScore}
    />
  )

  return (
    <div className={style.round}>
      <div className={style.roundHeader}>
        <div className={style.roundInfo}>
          {`${t('round')} ${number}`}
          <ScoreInput score={score} disabled />
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
        <RealmSelector incrementScore={incrementScore} decrementScore={decrementScore} />
        <div className={style.divider}/>
        <RealmSelector incrementScore={incrementScore} decrementScore={decrementScore} />
        <div className={style.divider}/>
        <RealmSelector incrementScore={incrementScore} decrementScore={decrementScore} />
      </div>
    </div>
  )
}

export default Round

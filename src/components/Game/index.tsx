import { times } from 'lodash'
import { useTranslation } from 'react-i18next'

import Round from '../Round'
import stonemaierLogo from '../../images/stonemaier-logo.png'

import style from './style.module.css'
import ScoreInput from '../ScoreInput'

const Game = () => {
  const { t } = useTranslation()
  return (
    <div className={style.game}>
      <div>
        <div className={style.header}>
          <img className={style.smLogo} src={stonemaierLogo} alt={t('smlogo')}/>
          <div className={style.title}>{t('title')}</div>
          <div className={style.author}>{t('author')}</div>
        </div>
        <div className={style.details}>
          <div className={style.description}>{t('description')}</div>
          <div className={style.totalScore}>
            <ScoreInput />
          </div>
        </div>
      </div>
      {times(3, (i) => <Round number={i + 1} key={i} />)}
    </div>
  )
}

export default Game

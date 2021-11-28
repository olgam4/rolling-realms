import { useTranslation } from 'react-i18next'

import Round from '../Round'
import ScoreInput from '../ScoreInput'

import useRealms from '../../hooks/useRealms'

import stonemaierLogo from '../../images/stonemaier-logo.png'
import style from './style.module.css'

const Game = () => {
  const { t } = useTranslation()
  const { randomizeRealms } = useRealms()

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
            <ScoreInput disabled />
          </div>
          <div>
            <button className={style.reset} onClick={randomizeRealms}>{t('reroll')}</button>
          </div>
        </div>
      </div>
      <Round number={1} />
      <Round number={2} />
      <Round number={3} />
    </div>
  )
}

export default Game

import { useTranslation } from 'react-i18next'

import DieInput from '../../DieInput'
import Door from '../../Door'
import Resource from '../../Resource'
import Score from '../../Score'

import style from './style.module.css'

const BetweenTwoCastles = () => {
  const { t } = useTranslation()
  return (
    <div className={style.betweenTwoCastles}>
      <div>{t('betweenTwoCastles')}</div>
      <div className={style.castles}>
        <div className={style.castle}>
          <div className={style.tower}>
            <DieInput />
            <Resource type="pumpkin" />
          </div>
          <div className={style.tower}>
            <Door />
            <DieInput />
            <DieInput />
            <Resource type="pumpkin" type2="pumpkin" />
          </div>
          <div className={style.tower}>
            <DieInput />
            <DieInput />
            <Resource type="heart" type2="heart" />
          </div>
        </div>
        <div className={style.castle}>
          <div className={style.tower}>
            <DieInput />
            <DieInput />
            <DieInput />
            <Resource type="coin" type2="heart" />
          </div>
          <div className={style.tower}>
            <Door />
            <DieInput />
            <DieInput />
            <Resource type="coin" type2="coin" />
          </div>
        </div>
      </div>
      <Score />
    </div>
  )
}

export default BetweenTwoCastles

import { useTranslation } from 'react-i18next'

import DieInput from '../../DieInput'
import Resource from '../../Resource'
import Score from '../../Score'

import style from './style.module.css'

const BetweenTwoCities = () => {
  const { t } = useTranslation()

  return (
    <div className={style.betweenTwoCities}>
      <div>{t('betweentwocities')}</div>
      <div className={style.grid}>
        <div className={style.column}>
          <DieInput big />
          <DieInput big />
          <DieInput big />
          <Resource type="pumpkin" type2="pumpkin" />
        </div>
        <div className={style.column}>
          <DieInput big />
          <DieInput big />
          <DieInput big />
          <Resource type="coin" type2="coin" />
        </div>
        <div className={style.column}>
          <DieInput big />
          <DieInput big />
          <DieInput big />
          <Resource type="heart" type2="heart" />
        </div>
        <div className={style.column}>
          <Resource type="pumpkin" type2="coin" />
          <Resource type="coin" type2="heart" />
          <Resource type="heart" type2="pumpkin" />
        </div>
      </div>
      <Score />
    </div>
  )
}

export default BetweenTwoCities

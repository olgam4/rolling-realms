import { useTranslation } from 'react-i18next'

import Die from '../../Die'
import Resource from '../../Resource'
import Score from '../../Score'
import Star from '../../Star'

import style from './style.module.css'

const Scythe = () => {
  const { t } = useTranslation()
  return (
    <div>
      <div>{t('scythe')}</div>
      <div className={style.actions}>
        <div className={style.action}>
          <Die value={1} resource="coin" />
          <div className={style.separator} />
          <Resource type="heart" cost />
          <Die value={5} />
          <Star disabled />
        </div>
        <div className={style.action}>
          <Die value={2} resource="heart" />
          <div className={style.separator} />
          <Resource type="pumpkin" cost />
          <Die value={6} />
          <Star disabled />
        </div>
        <div className={style.action}>
          <Die value={3} resource="pumpkin" />
          <div className={style.separator} />
          <Resource type="coin" cost />
          <Die value={2} />
          <Star disabled />
        </div>
        <div className={style.action}>
          <Die value={4} resource="coin" />
          <div className={style.separator} />
          <Resource type="pumpkin" cost />
          <Die value={1} />
          <Star disabled />
        </div>
        <div className={style.action}>
          <Die value={5} resource="heart" />
          <div className={style.separator} />
          <Resource type="coin" cost />
          <Die value={4} />
          <Star disabled />
        </div>
        <div className={style.action}>
          <Die value={6} resource="pumpkin" />
          <div className={style.separator} />
          <Resource type="heart" cost />
          <Die value={3} />
          <Star disabled />
        </div>
      </div>
      <Score />
    </div>
  )
}

export default Scythe

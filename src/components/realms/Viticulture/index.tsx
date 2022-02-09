import { times } from 'lodash'
import { useTranslation } from 'react-i18next'

import Die from '../../Die'
import Glass from '../../Glass'
import Star from '../../Star'

import style from './style.module.css'

const Viticulture = () => {
  const { t } = useTranslation()
  return (
    <div>
      <p>{t('viticulture')}</p>
      <div className={style.row}>
        <Die resource="heart" value={1} crossable />
        <Die resource="heart" value={2} crossable />
        <Die resource="coin" value={3} crossable />
        <Die resource="coin" value={4} crossable />
        <Die resource="pumpkin" value={5} crossable />
        <Die resource="pumpkin" value={6} crossable />
      </div>
      <div className={style.wines}>
        {times(3, (i) => (
          <Glass value={i + 10} key={i} />
        ))}
      </div>
      <div className={style.stars}>
        {times(6, (i) => (
          <Star disabled key={i} />
        ))}
      </div>
    </div>
  )
}

export default Viticulture

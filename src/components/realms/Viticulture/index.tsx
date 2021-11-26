import { times } from 'lodash'
import { useTranslation } from 'react-i18next'

import Die from '../../Die'
import Glass from '../../Glass'

import style from './style.module.css'

const Viticulture = () => {
  const { t } = useTranslation()
  return (
    <div>
      <p>{t('viticulture')}</p>
      <div className={style.row}>
        <Die resource="heart" value={1} />
        <Die resource="heart" value={2} />
        <Die resource="coin" value={3} />
        <Die resource="coin" value={4} />
        <Die resource="pumpkin" value={5} />
        <Die resource="pumpkin" value={6} />
      </div>
      <div className={style.wines}>
        {times(3, (i) => (
          <Glass value={i + 10} key={i} />
        ))}
      </div>
    </div>
  )
}

export default Viticulture

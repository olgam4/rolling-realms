import { useTranslation } from 'react-i18next'

import Die from '../../Die'
import Resource from '../../Resource'
import Score from '../../Score'
import Star from '../../Star'

import style from './style.module.css'

const Euphoria = () => {
  const { t } = useTranslation()

  return (
    <div className={style.container}>
      {t('euphoria')}
      <div className={style.dice}>
        <div className={style.happy}>
          <div className={style.column}>
            <Die value={1} />
            <Die value={3} />
            <Die value={5} />
          </div>
          <div className={style.column}>
            <Die value={2} />
            <Die value={4} />
            <Die value={6} />
          </div>
        </div>
        <div className={style.sad}>
          <div className={style.column}>
            <Die value={1} />
            <Die value={3} />
            <Die value={5} />
          </div>
          <div className={style.column}>
            <Die value={2} />
            <Die value={4} />
            <Die value={6} />
          </div>
        </div>
      </div>
      <div className={style.requirements}>
        <Resource type="coin" required="1-3" />
        <Star requirement="4-10" disabled />
        <Resource type="heart" type2="pumpkin" required="11+" />
      </div>
    <Score />
    </div>
  )
}

export default Euphoria

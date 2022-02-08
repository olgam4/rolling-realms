import { useTranslation } from 'react-i18next'

import Die from '../../Die'
import DieInput from '../../DieInput'

import style from './style.module.css'

const Azul = () => {
  const { t } = useTranslation()
  return (
    <div className={style.azul}>
      <p>
        {t('azul')}
      </p>
      <div className={style.game}>
        <div className={style.row}>
          <DieInput />
          &gt;
          <DieInput resource="pumpkin" />
          <DieInput resource="heart" />
          <DieInput resource="coin" />
        </div>
        <div className={style.row}>
          <DieInput />
          <DieInput />
          &gt;
          <DieInput resource="heart" />
          <Die value={4} disabled />
          <DieInput resource="pumpkin" />
        </div>
        <div className={style.row}>
          <DieInput />
          <DieInput />
          <DieInput />
          &gt;
          <Die value={5} disabled />
          <DieInput resource="heart" />
          <Die value={6} disabled />
        </div>
      </div>
    </div>
  )
}

export default Azul

import { useTranslation } from 'react-i18next'
import Cube from '../../Cube'
import OneCheck from '../../OneCheck'
import Resource from '../../Resource'

import style from './style.module.css'

const RollingRealms = () => {
  const { t } = useTranslation()
  return (
    <div className={style.rolling}>
      {t('rollingrealms')}
      <div className={style.cubes}>
        <Cube />
        <Cube />
        <Cube />
      </div>
      <div className={style.rewards}>
        <div className={style.bundle}>
          <OneCheck><Resource type="coin" /></OneCheck>
          <OneCheck><Resource type="heart" /></OneCheck>
          <hr />
          <OneCheck><Resource type="heart" /></OneCheck>
        </div>
        <div className={style.bundle}>
          <OneCheck><Resource type="coin" /></OneCheck>
          <OneCheck><Resource type="heart" /></OneCheck>
          <hr />
          <OneCheck><Resource type="heart" /></OneCheck>
        </div>
        <div className={style.bundle}>
          <OneCheck><Resource type="coin" /></OneCheck>
          <OneCheck><Resource type="heart" /></OneCheck>
          <hr />
          <OneCheck><Resource type="heart" /></OneCheck>
        </div>
      </div>
    </div>
  )
}

export default RollingRealms

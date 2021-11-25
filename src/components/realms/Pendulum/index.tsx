import { useTranslation } from 'react-i18next'
import Die from '../../Die'
import Hexagon from '../../Hexagon'
import Hourglass from '../../Hourglass'
import Resource from '../../Resource'
import Star from '../../Star'

import style from './style.module.css'

const Pendulum = () => {
  const { t } = useTranslation()

  return (
    <div>
      {t('pendulum')}
      <div className={style.hexagons}>
        <Hexagon interactive>
          <Resource type="pumpkin" type2="heart" />
        </Hexagon>
        <Hexagon interactive>
          <Resource type="heart" type2="coin" />
        </Hexagon>
        <Hexagon interactive>
          <Resource type="pumpkin" type2="coin" />
        </Hexagon>
        <Hexagon interactive>
          <Star disabled />
        </Hexagon>
        <Hexagon interactive>
          <Star disabled />
        </Hexagon>
      </div>
      <div className={style.hourglasses}>
        <Hourglass>
          <Die value={6}/>
        </Hourglass>
        <Hourglass>
          <Die value={5}/>
          <Die value={4}/>
        </Hourglass>
        <Hourglass>
          <Die value={3}/>
          <Die value={2}/>
          <Die value={1}/>
        </Hourglass>
      </div>
    </div>
  )
}

export default Pendulum

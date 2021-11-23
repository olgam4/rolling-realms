import { useTranslation } from 'react-i18next'

import Die from '../../Die'
import DieInput from '../../DieInput'
import Arrow from '../../Arrow'
import Box from '../../Box'
import Star from '../../Star'
import Score from '../../Score'

import style from './style.module.css'

const Charterstone = () => {
  const { t } = useTranslation()
  return (
    <div className={style.charterstone}>
      <div>{t('charterstone')}</div>
      <div className={style.dice}>
        <div>
          <Die value={1} resource="pumpkin" />
          <Arrow bottom />
          <DieInput />
          <Box />
          <Star disabled />
        </div>
        <div>
          <Die value={2} resource="pumpkin" />
          <Arrow bottom />
          <DieInput />
          <Box />
          <Star disabled />
        </div>
        <div>
          <Die value={3} resource="heart" />
          <Arrow bottom />
          <DieInput />
          <Box />
          <Star disabled />
        </div>
        <div>
          <Die value={4} resource="heart" />
          <Arrow bottom />
          <DieInput />
          <Box />
          <Star disabled />
        </div>
        <div>
          <Die value={5} resource="coin" />
          <Arrow bottom />
          <DieInput />
          <Box />
          <Star disabled />
        </div>
        <div>
          <Die value={6} resource="coin" />
          <Arrow bottom />
          <DieInput />
          <Box />
          <Star disabled />
        </div>
      </div>
      <Score />
    </div>
  )
}

export default Charterstone

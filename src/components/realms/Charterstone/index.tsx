import { useTranslation } from 'react-i18next'

import Die from '../../Die'
import DieInput from '../../DieInput'
import Arrow from '../../Arrow'
import Box from '../../Box'
import { ResourceProps } from '../../Resource'
import Star from '../../Star'

import style from './style.module.css'

const Charterstone = () => {
  const { t } = useTranslation()
  
  const renderDie = (value: number, resource: ResourceProps['type']) => (
    <div>
      <Die value={value} resource={resource} />
      <Arrow bottom />
      <DieInput />
      <Box />
      <Star disabled />
    </div>
  )

  return (
    <div className={style.charterstone}>
      <div>{t('charterstone')}</div>
      <div className={style.dice}>
        {renderDie(1, 'pumpkin')}
        {renderDie(2, 'pumpkin')}
        {renderDie(3, 'heart')}
        {renderDie(4, 'heart')}
        {renderDie(5, 'coin')}
        {renderDie(6, 'coin')}
      </div>
    </div>
  )
}

export default Charterstone

import { useTranslation } from 'react-i18next'

import Die from '../../Die'
import Resource, { ResourceProps } from '../../Resource'
import Star from '../../Star'

import style from './style.module.css'

const Scythe = () => {
  const { t } = useTranslation()

  const renderAction = (
    value: number,
    resource: ResourceProps['type'],
    resourceCost: ResourceProps['type'],
    secondAction: number
  ) => (
    <div className={style.action}>
      <Die value={value} resource={resource} />
      <div className={style.separator} />
      <Resource type={resourceCost} cost />
      <Die value={secondAction} />
      <Star disabled />
    </div>
  )

  return (
    <div>
      <div>{t('scythe')}</div>
      <div className={style.actions}>
        {renderAction(1, "coin", "heart", 5)}
        {renderAction(2, "heart", "pumpkin", 6)}
        {renderAction(3, "pumpkin", "coin", 2)}
        {renderAction(4, "coin", "pumpkin", 1)}
        {renderAction(5, "heart", "coin", 4)}
        {renderAction(6, "pumpkin", "heart", 3)}
      </div>
    </div>
  )
}

export default Scythe

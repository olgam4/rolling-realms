import { useTranslation } from 'react-i18next'

import Arrow from '../../Arrow'
import Pyramid from '../../Pyramid'
import Resource, { ResourceProps } from '../../Resource'

import style from './style.module.css'

const renderResources = (resources: ResourceProps['type'][]) => {
  return (
    <div className={style.resourceRow}>
      <Arrow right />
      {resources.map((resource, i) => (
        <Resource type={resource} key={i} />
      ))}
    </div>
  )
}

const TheSociety = () => {
  const { t } = useTranslation()

  return (
    <div className={style.container}>
      {t('thesociety')}
      <div className={style.minigame}>
        <Pyramid />
        <div className={style.resources}>
          {renderResources(['heart', 'coin'])}
          {renderResources(['pumpkin', 'heart', 'coin'])}
          {renderResources(['pumpkin', 'pumpkin', 'heart', 'coin'])}
        </div>
      </div>
    </div>
  )
}

export default TheSociety

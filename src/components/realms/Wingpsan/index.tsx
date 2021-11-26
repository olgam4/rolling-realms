import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import DieInput from '../../DieInput'
import { ResourceProps } from '../../Resource'

import style from './style.module.css'

const pickRandomBird = () => {
  const birds = ['🕊',' 🦅', '🦆', '🦜', '🦉']
  const randomIndex = Math.floor(Math.random() * birds.length)
  return birds[randomIndex]
}

const Wingspan = () => {
  const { t } = useTranslation()
  const [birdA] = useState(pickRandomBird())
  const [birdB] = useState(pickRandomBird())
  const [birdC] = useState(pickRandomBird())

  const renderBird = (resources: ResourceProps['type'][], wingspan: number, bird: string) => (
    <div className={style.bird}>
      {bird} {wingspan}
      <div className={style.dice}>
        {resources.map((resource, i) => (
          <DieInput resource={resource} key={i} />
        ))}
        <DieInput resource="star" />
      </div>
    </div>
  )

  return (
    <div>
      {t('wingspan')}
      <div className={style.birds}>
        {renderBird(['pumpkin', 'coin'], 7, birdA)}
        {renderBird(['coin', 'heart'], 12, birdB)}
        {renderBird(['heart', 'pumpkin'], 16, birdC)}
      </div>
    </div>
  )
}

export default Wingspan

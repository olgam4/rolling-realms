import { times } from 'lodash'
import { useTranslation } from 'react-i18next'

import DieInput from '../../DieInput'
import Door from '../../Door'
import Resource, { ResourceProps } from '../../Resource'

import style from './style.module.css'


type Tower = {
  height: number
  resource1: ResourceProps['type']
  resource2?: ResourceProps['type']
  hasDoor: boolean
}

const BetweenTwoCastles = () => {
  const { t } = useTranslation()

  const renderCastle = (towers: Tower[]) => {
    const towerElement = towers.map((tower, index) => {
      const { height, resource1, resource2, hasDoor } = tower
      return (
        <div key={index} className={style.tower}>
          {hasDoor &&
            <div className={style.door}>
              <Door />
            </div>}
          {times(height, () => (<DieInput big />))}
          <Resource type={resource1} type2={resource2} />
        </div>
      )
    })
    return (
      <div className={style.castle}>
        {towerElement}
      </div>
    )
  }

  return (
    <div className={style.betweenTwoCastles}>
      <div>{t('betweenTwoCastles')}</div>
      <div className={style.castles}>
        {renderCastle([{
          height: 1,
          resource1: 'pumpkin',
          hasDoor: false,
        },{
          height: 2,
          resource1: 'pumpkin',
          resource2: 'pumpkin',
          hasDoor: true,
        },{
          height: 2,
          resource1: 'heart',
          resource2: 'heart',
          hasDoor: false,
        }])}
        {renderCastle([{
          height: 3,
          resource1: 'coin',
          resource2: 'heart',
          hasDoor: false,
        },{
          height: 2,
          resource1: 'coin',
          resource2: 'coin',
          hasDoor: true,
        }])}
      </div>
    </div>
  )
}

export default BetweenTwoCastles

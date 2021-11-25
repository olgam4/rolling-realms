import { useState } from 'react'

import Score from '../Score'

import BetweenTwoCastles from '../realms/BetweenTwoCastles'
import BetweenTwoCities from '../realms/BetweenTwoCities'
import Charterstone from '../realms/Charterstone'
import Euphoria from '../realms/Euphoria'
import MyLittleScythe from '../realms/MyLittleScythe'
import Scythe from '../realms/Scythe'
import Viticulture from '../realms/Viticulture'

import style from './style.module.css'

type Realms = 'viticulture' | 'charterstone' | 'betweentwocastles' | 'scythe' | 'betweentwocities' | 'euphoria' | 'mylittlescythe'

const pickRealmComponent = (realm: Realms) => {
  switch (realm) {
    case 'viticulture':
      return <Viticulture />
    case 'charterstone':
      return <Charterstone />
    case 'betweentwocastles':
      return <BetweenTwoCastles />
    case 'scythe':
      return <Scythe />
    case 'betweentwocities':
      return <BetweenTwoCities />
    case 'euphoria':
      return <Euphoria />
    case 'mylittlescythe':
      return <MyLittleScythe />
    default:
      return <div>{realm}</div>
  }
}

const pickRealmName = (realm: Realms) => {
  switch (realm) {
    case 'viticulture':
      return 'Viticulture'
    case 'charterstone':
      return 'Charterstone'
    case 'betweentwocastles':
      return 'Between Two Castles'
    case 'scythe':
      return 'Scythe'
    case 'betweentwocities':
      return 'Between Two Cities'
    case 'euphoria':
      return 'Euphoria'
    case 'mylittlescythe':
      return 'My Little Scythe'
    default:
      return 'Unknown'
  }
}

const RealmChoices = (setRealm: Function) => {
  return (
    <div className={style.realmChoices}>
      <div className={style.realmChoice} onClick={() => setRealm('betweentwocastles')}>
        {pickRealmName('betweentwocastles')}
      </div>
      <div className={style.realmChoice} onClick={() => setRealm('betweentwocities')}>
        {pickRealmName('betweentwocities')}
      </div>
      <div className={style.realmChoice} onClick={() => setRealm('charterstone')}>
        {pickRealmName('charterstone')}
      </div>
      <div className={style.realmChoice} onClick={() => setRealm('euphoria')}>
        {pickRealmName('euphoria')}
      </div>
      <div className={style.realmChoice} onClick={() => setRealm('mylittlescythe')}>
        {pickRealmName('mylittlescythe')}
      </div>
      <div className={style.realmChoice} onClick={() => setRealm('scythe')}>
        {pickRealmName('scythe')}
      </div>
      <div className={style.realmChoice} onClick={() => setRealm('viticulture')}>
        {pickRealmName('viticulture')}
      </div>
    </div>
  )

}

const pickRandomRealm = () => {
  const realms: Realms[] = ['betweentwocastles', 'betweentwocities', 'charterstone', 'euphoria', 'scythe', 'viticulture', 'mylittlescythe']
  const randomIndex = Math.floor(Math.random() * realms.length)
  return realms[randomIndex]
}

type Props = {
  incrementScore: () => void
  decrementScore: () => void
}

const RealmSelector = ({ incrementScore, decrementScore }: Props) => {
  const baseRealm = pickRandomRealm()
  const [realm, setRealm] = useState<Realms>(baseRealm)
  const [realmChoicesVisible, setRealmChoicesVisible] = useState(false)

  const changeRealm = (realm: Realms) => {
    setRealm(realm)
    setRealmChoicesVisible(false)
  }

  const toggleRealmChoicesVisible = () => {
    setRealmChoicesVisible(!realmChoicesVisible)
  }

  return (
    <div className={style.realm}>
      <div onClick={toggleRealmChoicesVisible} className={style.realmTitle}>
        {pickRealmName(realm)}
      </div>
      {realmChoicesVisible && RealmChoices(changeRealm)}
      <div>
        {pickRealmComponent(realm)}
      </div>
      <div className={style.score}>
        <Score incrementScore={incrementScore} decrementScore={decrementScore} />
      </div>
    </div>
  )
}

export default RealmSelector

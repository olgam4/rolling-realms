import { useState } from 'react'

import Score from '../Score'

import BetweenTwoCastles from '../realms/BetweenTwoCastles'
import BetweenTwoCities from '../realms/BetweenTwoCities'
import Charterstone from '../realms/Charterstone'
import Euphoria from '../realms/Euphoria'
import MyLittleScythe from '../realms/MyLittleScythe'
import Pendulum from '../realms/Pendulum'
import Scythe from '../realms/Scythe'
import Tapestry from '../realms/Tapestry'
import TheSociety from '../realms/TheSociety'
import Viticulture from '../realms/Viticulture'
import Wingspan from '../realms/Wingpsan'

import style from './style.module.css'

type Realms = 'viticulture' | 'charterstone' | 'betweentwocastles' | 'scythe' | 'betweentwocities' | 'euphoria' | 'mylittlescythe' | 'wingspan' | 'tapestry' | 'pendulum' | 'thesociety'

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
    case 'wingspan':
      return <Wingspan />
    case 'tapestry':
      return <Tapestry />
    case 'pendulum':
      return <Pendulum />
    case 'thesociety':
      return <TheSociety />
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
    case 'wingspan':
      return 'Wingspan'
    case 'tapestry':
      return 'Tapestry'
    case 'pendulum':
      return 'Pendulum'
    case 'thesociety':
      return 'The Society'
    default:
      return 'Unknown'
  }
}

const RealmChoices = (setRealm: Function) => {
  const renderRealmChoice = (realm: Realms) => {
    return (
      <div className={style.realmChoice} key={realm} onClick={() => setRealm(realm)}>
        {pickRealmName(realm)}
      </div>
    )
  }
  return (
    <div className={style.realmChoices}>
      {renderRealmChoice('betweentwocastles')}
      {renderRealmChoice('betweentwocities')}
      {renderRealmChoice('charterstone')}
      {renderRealmChoice('euphoria')}
      {renderRealmChoice('mylittlescythe')}
      {renderRealmChoice('pendulum')}
      {renderRealmChoice('scythe')}
      {renderRealmChoice('tapestry')}
      {renderRealmChoice('thesociety')}
      {renderRealmChoice('viticulture')}
      {renderRealmChoice('wingspan')}
    </div>
  )

}

const pickRandomRealm = () => {
  const realms: Realms[] = ['betweentwocastles', 'betweentwocities', 'charterstone', 'euphoria', 'scythe', 'viticulture', 'mylittlescythe', 'wingspan', 'tapestry', 'pendulum', 'thesociety']
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
      {pickRealmComponent(realm)}
      <div className={style.score}>
        <Score incrementScore={incrementScore} decrementScore={decrementScore} />
      </div>
    </div>
  )
}

export default RealmSelector

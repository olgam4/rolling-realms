import { useState } from 'react'

import BetweenTwoCastles from '../realms/BetweenTwoCastles'
import Charterstone from '../realms/Charterstone'
import Scythe from '../realms/Scythe'
import Viticulture from '../realms/Viticulture'

import style from './style.module.css'

type Realms = 'viticulture' | 'charterstone' | 'betweentwocastles' | 'scythe'

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
    default:
      return 'Unknown'
  }
}

const RealmChoices = (setRealm: Function) => {
  return (
    <div className={style.realmChoices}>
      <div className={style.realmChoice} onClick={() => setRealm('viticulture')}>
        Viticulture
      </div>
      <div className={style.realmChoice} onClick={() => setRealm('charterstone')}>
        Charterstone
      </div>
      <div className={style.realmChoice} onClick={() => setRealm('betweentwocastles')}>
        Between Two Castles
      </div>
      <div className={style.realmChoice} onClick={() => setRealm('scythe')}>
        Scythe
      </div>
    </div>
  )

}

const RealmSelector = () => {
  const [realm, setRealm] = useState<Realms>('scythe')
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
    </div>
  )
}

export default RealmSelector

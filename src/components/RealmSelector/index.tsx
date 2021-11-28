import { useState } from 'react'

import useRealms from '../../hooks/useRealms'
import { Realm } from '../../hooks/useRealms/tools'

import style from './style.module.css'

type Props = {
  roundNumber: 1 | 2 | 3
  cardNumber: 1 | 2 | 3
}

const RealmSelector = ({ roundNumber, cardNumber }: Props) => {
  const { r, realms, setRealmInRound } = useRealms(roundNumber)
  const [realmChoicesVisible, setRealmChoicesVisible] = useState(false)

  const toggleRealmChoicesVisible = () => {
    setRealmChoicesVisible(!realmChoicesVisible)
  }

  const RealmChoices = () => {
    const { r, everyRealms } = useRealms()

    const renderRealmChoice = (realm: Realm) => {
      const setRealm = () => {
        setRealmInRound(realm, roundNumber, cardNumber)
        toggleRealmChoicesVisible()
      }

      return (
        <div className={style.realmChoice} key={realm} onClick={() => setRealm()}>
          {r(`${realm}.name`)}
        </div>
      )
    }

    return (
      <div className={`${style.realmChoices} ${realmChoicesVisible && style.visible}`}>
        {everyRealms.sort().map(renderRealmChoice)}
      </div>
    )

  }

  return (
    <>
      <div className={style.close} />
      <div onClick={toggleRealmChoicesVisible} className={style.realmTitle}>
        {r(`${realms[cardNumber - 1]}.name`)}
        <RealmChoices />
      </div>
    </>
  )
}

export default RealmSelector

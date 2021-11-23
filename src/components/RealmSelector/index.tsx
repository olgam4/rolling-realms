import { useState } from 'react'
import Viticulture from '../realms/Viticulture'
import Charterstone from '../realms/Charterstone'

const pickRealm = (realm: string) => {
  switch (realm) {
    case 'viticulture':
      return <Viticulture />
    case 'charterstone':
      return <Charterstone />
    default:
      return <div>{realm}</div>
  }
}

const RealmSelector = () => {
  const [realm, setRealm] = useState('charterstone')
  return (
    <div>
      <select value={realm} onChange={e => setRealm(e.target.value)}>
        <option value="viticulture">Viticulture</option>
        <option value="charterstone">Charterstone</option>
      </select>
      <div>{pickRealm(realm)}</div>
    </div>
  )
}

export default RealmSelector

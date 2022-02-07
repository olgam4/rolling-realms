import BetweenTwoCastles from '../../components/realms/BetweenTwoCastles'
import BetweenTwoCities from '../../components/realms/BetweenTwoCities'
import Charterstone from '../../components/realms/Charterstone'
import Euphoria from '../../components/realms/Euphoria'
import MyLittleScythe from '../../components/realms/MyLittleScythe'
import Pendulum from '../../components/realms/Pendulum'
import RollingRealms from '../../components/realms/RollingRealms'
import Scythe from '../../components/realms/Scythe'
import Tapestry from '../../components/realms/Tapestry'
import TheSociety from '../../components/realms/TheSociety'
import Viticulture from '../../components/realms/Viticulture'
import Wingspan from '../../components/realms/Wingpsan'

export type Realm = 
  | 'viticulture'
  | 'charterstone'
  | 'betweentwocastles' 
  | 'scythe' 
  | 'betweentwocities' 
  | 'euphoria' 
  | 'mylittlescythe' 
  | 'wingspan' 
  | 'tapestry' 
  | 'pendulum' 
  | 'thesociety'
  | 'rollingrealms'

export const realms = [
  'viticulture',
  'charterstone',
  'betweentwocastles',
  'scythe',
  'betweentwocities',
  'euphoria',
  'mylittlescythe',
  'wingspan',
  'tapestry',
  'pendulum',
  'thesociety',
  'rollingrealms',
] as Realm[]

type Round = [Realm, Realm, Realm]

export const pickNineRandomDifferentRealms = () => {
  const pickedRealms: Realm[] = []
  while (pickedRealms.length < 9) {
    const randomIndex = Math.floor(Math.random() * realms.length)
    const randomRealm = realms[randomIndex]
    if (!pickedRealms.includes(randomRealm)) {
      pickedRealms.push(randomRealm)
    }
  }
  return {
    roundOne: pickedRealms.slice(0, 3) as Round,
    roundTwo: pickedRealms.slice(3, 6) as Round,
    roundThree: pickedRealms.slice(6, 9) as Round,
  }
}

export const pickNineRealmsFromHash = (hash: string) => {
  const pickedRealms = getRealmsFromIds(hash)
  return {
    roundOne: pickedRealms.slice(0, 3) as Round,
    roundTwo: pickedRealms.slice(3, 6) as Round,
    roundThree: pickedRealms.slice(6, 9) as Round,
  }
  
}

export const getRealmName = (realm: Realm) => {
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
    case 'rollingrealms':
      return 'Rolling Realms'
    default:
      return 'Unknown'
  }
}

export const getRealmComponent = (realm: Realm) => {
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
    case 'rollingrealms':
      return <RollingRealms />
    default:
      return null
  }
}

export const getRealmId = (realm : Realm) => {
  switch (realm) {
    case 'viticulture':
      return 'A'
    case 'charterstone':
      return 'B'
    case 'betweentwocastles':
      return 'C'
    case 'scythe':
      return 'D'
    case 'betweentwocities':
      return 'E'
    case 'euphoria':
      return 'F'
    case 'mylittlescythe':
      return 'G'
    case 'wingspan':
      return 'H'
    case 'tapestry':
      return 'I'
    case 'pendulum':
      return 'J'
    case 'thesociety':
      return 'K'
    case 'rollingrealms':
      return 'L'
    default:
      return null
  }
}

export const getRealmFromId = (id : string): Realm => {
  switch (id) {
    case 'A':
      return 'viticulture'
    case 'B':
      return 'charterstone'
    case 'C':
      return 'betweentwocastles'
    case 'D':
      return 'scythe'
    case 'E':
      return 'betweentwocities'
    case 'F':
      return 'euphoria'
    case 'G':
      return 'mylittlescythe'
    case 'H':
      return 'wingspan'
    case 'I':
      return 'tapestry'
    case 'J':
      return 'pendulum'
    case 'K':
      return 'thesociety'
    case 'L':
      return 'rollingrealms'
    default:
      return 'viticulture'
  }
}

export const getRealmsFromIds = (ids: string): Realm[] => {
  const realms = ids.split('').map((id: string) => {
    return getRealmFromId(id)
  })

  return realms
}

export const getHashForRealms = (realms: Realm[]) => {
  return realms.map(getRealmId).join('')
}

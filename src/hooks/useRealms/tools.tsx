import BetweenTwoCastles from '../../components/realms/BetweenTwoCastles'
import BetweenTwoCities from '../../components/realms/BetweenTwoCities'
import Charterstone from '../../components/realms/Charterstone'
import Euphoria from '../../components/realms/Euphoria'
import MyLittleScythe from '../../components/realms/MyLittleScythe'
import Pendulum from '../../components/realms/Pendulum'
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
    default:
      return null
  }
}

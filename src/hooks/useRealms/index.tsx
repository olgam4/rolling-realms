import { useContext, ReactElement } from 'react'
import { Provider, setupContext } from '../base'
import { 
  getRealmComponent,
  getRealmName,
  pickNineRandomDifferentRealms,
  realms as realmsList,
  Realm
} from './tools'

type Round = [Realm, Realm, Realm] | []

type State = {
  roundOne: Round
  roundTwo: Round
  roundThree: Round
}

type ActionRounds = {
  type:
    | 'SET_ROUND_ONE'
    | 'SET_ROUND_TWO'
    | 'SET_ROUND_THREE'
  payload: Round
}

type ActionCards = {
  type:
    | 'SET_CARD_11' 
    | 'SET_CARD_12' 
    | 'SET_CARD_13' 
    | 'SET_CARD_21' 
    | 'SET_CARD_22' 
    | 'SET_CARD_23' 
    | 'SET_CARD_31' 
    | 'SET_CARD_32' 
    | 'SET_CARD_33'
  payload: Realm
}

type ActionResetRounds = {
  type: 'RESET_ROUNDS'
}

type Action = ActionRounds | ActionCards | ActionResetRounds

const { roundOne, roundTwo, roundThree } = pickNineRandomDifferentRealms()

const defaultState: State = {
  roundOne,
  roundTwo,
  roundThree
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_ROUND_ONE':
      return {
        ...state,
        roundOne: action.payload
      }
    case 'SET_ROUND_TWO':
      return {
        ...state,
        roundTwo: action.payload
      }
    case 'SET_ROUND_THREE':
      return {
        ...state,
        roundThree: action.payload
      }
    case 'SET_CARD_11':
      state.roundOne[0] = action.payload
      return {
        ...state,
      }
    case 'SET_CARD_12':
      state.roundOne[1] = action.payload
      return {
        ...state,
      }
    case 'SET_CARD_13':
      state.roundOne[2] = action.payload
      return {
        ...state,
      }
    case 'SET_CARD_21':
      state.roundTwo[0] = action.payload
      return {
        ...state,
      }
    case 'SET_CARD_22':
      state.roundTwo[1] = action.payload
      return {
        ...state,
      }
    case 'SET_CARD_23':
      state.roundTwo[2] = action.payload
      return {
        ...state,
      }
    case 'SET_CARD_31':
      state.roundThree[0] = action.payload
      return {
        ...state,
      }
    case 'SET_CARD_32':
      state.roundThree[1] = action.payload
      return {
        ...state,
      }
    case 'SET_CARD_33':
      state.roundThree[2] = action.payload
      return {
        ...state,
      }
    case 'RESET_ROUNDS':
      const newState = pickNineRandomDifferentRealms()
      return newState
    default:
      return state
  }
}

const RealmsContext = setupContext<State, Action>()

export const { ProviderComponent: RealmsProvider } = Provider(RealmsContext, reducer, defaultState)

type RoundNumber = 1 | 2 | 3
type CardNumber = 1 | 2 | 3

type RActions = `${Realm}.name` | `${Realm}.component`
type ReturnType = {
  r: (action: RActions) => string | null | ReactElement
  realms: Realm[]
  everyRealms: Realm[]
  randomizeRealms: () => void
  setRealmInRound: (realm: Realm, round: RoundNumber, cardNumber: CardNumber) => void
}


const useRealms = (roundNumber?: RoundNumber): ReturnType =>  {
  const context = useContext(RealmsContext)
  if (context === undefined || context === null) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }

  const setRealmInRound = (realm: Realm, round: RoundNumber, cardNumber: CardNumber) => {
    cardNumber && context.dispatch({ type: `SET_CARD_${round}${cardNumber}`, payload: realm })
  }

  const randomizeRealms = () => {
    context.dispatch({ type: 'RESET_ROUNDS' })
  }

  const r = (action: RActions) => {
    const [realmString, actionString] = action.split('.') as [Realm, string]

    switch(actionString) {
      case 'name':
        return getRealmName(realmString)
      case 'component':
        return getRealmComponent(realmString)
      default:
        return null
    }
  }

  const realms = [...context.state.roundOne, ...context.state.roundTwo, ...context.state.roundThree]

  const baseReturnObject = {
    r,
    realms,
    everyRealms: realmsList,
    randomizeRealms,
    setRealmInRound
  }

  if (roundNumber === 1) {
    return {
      ...baseReturnObject,
      realms: context.state.roundOne,
    }
  }

  if (roundNumber === 2) {
    return {
      ...baseReturnObject,
      realms: context.state.roundTwo,
    }
  }

  if (roundNumber === 3) {
    return {
      ...baseReturnObject,
      realms: context.state.roundThree,
    }
  }

  return baseReturnObject
}

export default useRealms

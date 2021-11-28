import { useContext } from 'react'
import { Provider, setupContext } from './base'

type State = {
  roundOne: number
  roundTwo: number
  roundThree: number
}

type ActionOnRoundOne = {
  type: "SET_ROUND_ONE"
  payload: number
}

type ActionOnRoundTwo = {
  type: "SET_ROUND_TWO"
  payload: number
}

type ActionOnRoundThree = {
  type: "SET_ROUND_THREE"
  payload: number
}

type Action = ActionOnRoundOne | ActionOnRoundTwo | ActionOnRoundThree

export const ScoreContext = setupContext<State, Action>()

const defaultState: State = {
  roundOne: 0,
  roundTwo: 0,
  roundThree: 0,
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_ROUND_ONE":
      return { ...state, roundOne: action.payload }
    case "SET_ROUND_TWO":
      return { ...state, roundTwo: action.payload }
    case "SET_ROUND_THREE":
      return { ...state, roundThree: action.payload }
    default:
      return state
  }
}

export const { ProviderComponent: ScoreProvider } = Provider(ScoreContext, reducer, defaultState)

type Rounds = 1 | 2 | 3

const useScore = (roundNumber?: Rounds) => {
  const context = useContext(ScoreContext)
  if (context === undefined || context === null) {
    throw new Error("useScore must be used within a ScoreProvider")
  }

  const incrementScoreOne = () => {
    context.dispatch({ type: "SET_ROUND_ONE", payload: context.state.roundOne + 1 })
  }

  const decrementScoreOne = () => {
    context.dispatch({ type: "SET_ROUND_ONE", payload: context.state.roundOne - 1 })
  }

  const bumpScoreOne = () => {
    context.dispatch({ type: "SET_ROUND_ONE", payload: context.state.roundOne + 0.1 })
  }

  const reduceScoreOne = () => {
    context.dispatch({ type: "SET_ROUND_ONE", payload: context.state.roundOne - 0.1 })
  }

  const resetScoreOne = (value: number) => {
    context.dispatch({ type: "SET_ROUND_ONE", payload: context.state.roundOne - value })
  }

  const incrementScoreTwo = () => {
    context.dispatch({ type: "SET_ROUND_TWO", payload: context.state.roundTwo + 1 })
  }

  const decrementScoreTwo = () => {
    context.dispatch({ type: "SET_ROUND_TWO", payload: context.state.roundTwo - 1 })
  }

  const bumpScoreTwo = () => {
    context.dispatch({ type: "SET_ROUND_TWO", payload: context.state.roundTwo + 0.1 })
  }

  const reduceScoreTwo = () => {
    context.dispatch({ type: "SET_ROUND_TWO", payload: context.state.roundTwo - 0.1 })
  }

  const resetScoreTwo = (value: number) => {
    context.dispatch({ type: "SET_ROUND_TWO", payload: context.state.roundTwo - value })
  }

  const incrementScoreThree = () => {
    context.dispatch({ type: "SET_ROUND_THREE", payload: context.state.roundThree + 1 })
  }

  const decrementScoreThree = () => {
    context.dispatch({ type: "SET_ROUND_THREE", payload: context.state.roundThree - 1 })
  }

  const bumpScoreThree = () => {
    context.dispatch({ type: "SET_ROUND_THREE", payload: context.state.roundThree + 0.1 })
  }

  const reduceScoreThree = () => {
    context.dispatch({ type: "SET_ROUND_THREE", payload: context.state.roundThree - 0.1 })
  }

  const resetScoreThree = (value: number) => {
    context.dispatch({ type: "SET_ROUND_THREE", payload: context.state.roundThree - value })
  }

  const roundOne = {
    score: context.state.roundOne,
    incrementScore: incrementScoreOne,
    decrementScore: decrementScoreOne,
    bumpScore: bumpScoreOne,
    reduceScore: reduceScoreOne,
    resetScore: resetScoreOne,
  }

  const roundTwo = {
    score: context.state.roundTwo,
    incrementScore: incrementScoreTwo,
    decrementScore: decrementScoreTwo,
    bumpScore: bumpScoreTwo,
    reduceScore: reduceScoreTwo,
    resetScore: resetScoreTwo,
  }

  const roundThree = {
    score: context.state.roundThree,
    incrementScore: incrementScoreThree,
    decrementScore: decrementScoreThree,
    bumpScore: bumpScoreThree,
    reduceScore: reduceScoreThree,
    resetScore: resetScoreThree,
  }

  const totalScore = context.state.roundOne + context.state.roundTwo + context.state.roundThree

  if (roundNumber === 1) {
    return roundOne
  } else if (roundNumber === 2) {
    return roundTwo
  } else if (roundNumber === 3) {
    return roundThree
  } else {
    return {
      score: totalScore,
      incrementScore: () => {},
      decrementScore: () => {},
      bumpScore: () => {},
      reduceScore: () => {},
      resetScore: () => {},
    }
  }
}

export default useScore

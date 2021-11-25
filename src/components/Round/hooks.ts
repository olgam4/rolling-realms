import { useState } from 'react'

const useRoundScore = (initialScore: number) => {
  const [score, setScore] = useState(initialScore)

  const incrementScore = () => {
    setScore(score + 1)
  }

  const decrementScore = () => {
    setScore(score - 1)
  }

  const resetScore = () => {
    setScore(initialScore)
  }

  const advanceScore = () => {
    setScore(score + 0.1)
  }

  const backScore = () => {
    setScore(score - 0.1)
  }

  return {
    score,
    incrementScore,
    decrementScore,
    resetScore,
    advanceScore,
    backScore,
  }
}

export { useRoundScore }

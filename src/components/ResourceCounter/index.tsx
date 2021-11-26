import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import useScore from '../../hooks/useScore'

import Resource, { ResourceProps } from '../Resource'

import style from './style.module.css'

type Props = {
  resource: ResourceProps['type']
  roundNumber: 1 | 2 | 3
}

const ResourceCounter = ({ resource, roundNumber }: Props) => {
  const { t } = useTranslation()
  const {
    bumpScore,
    reduceScore,
    resetScore,
  } = useScore(roundNumber)

  const [current, setCurrent] = useState(0)
  const [total, setTotal] = useState(0)
  const [asking, setAsking] = useState(false)

  const handleIncrement = () => {
    setCurrent(current + 1)
    setTotal(total + 1)
    bumpScore()
  }

  const handleDecrement = () => {
    if (current === 0) return
    setCurrent(current - 1)
    reduceScore()
  }

  const askIfSure = () => {
    setAsking(true)
  }

  const thenReset = () => {
    resetScore(current * 0.1)
    setCurrent(0)
    setTotal(0)
    setAsking(false)
  }

  return (
    <div className={style.resourceCounter}>
      <div onClick={handleDecrement} className={style.modifier}>➖</div>
      <div className={style.data}>
        <div className={style.current}>
          {current}
          <Resource type={resource} />
        </div>
        <div className={style.total}>
          {t('total')}: {total}
          { asking ?
            <div className={style.reset} onClick={thenReset}>?</div> :
            <div className={style.reset} onClick={askIfSure}>↻</div>
          }
        </div>
      </div>
      <div onClick={handleIncrement} className={style.modifier}>➕</div>
    </div>
  )
}

export default ResourceCounter

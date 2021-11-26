import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import Resource, { ResourceProps } from '../Resource'

import style from './style.module.css'

type ResourceCounterProps = {
  resource: ResourceProps['type']
  incrementScore: () => void
  decrementScore: () => void
}

const ResourceCounter = ({
  incrementScore,
  decrementScore,
  resource
}: ResourceCounterProps) => {
  const { t } = useTranslation()
  const [current, setCurrent] = useState(0)
  const [total, setTotal] = useState(0)

  const handleIncrement = () => {
    setCurrent(current + 1)
    setTotal(total + 1)
    incrementScore()
  }

  const handleDecrement = () => {
    if (current === 0) return
    setCurrent(current - 1)
    decrementScore()
  }

  return (
    <div className={style.resourceCounter}>
      <div onClick={handleDecrement} className={style.modifier}>➖</div>
      <div className={style.data}>
        <div className={style.current}>
          {current}
          <Resource type={resource} />
        </div>
        {t('total')}: {total}
      </div>
      <div onClick={handleIncrement} className={style.modifier}>➕</div>
    </div>
  )
}

export default ResourceCounter

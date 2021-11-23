import { useState } from 'react'
import Resource, { ResourceProps } from '../Resource'

import style from './style.module.css'

type ResourceCounterProps = {
  resource: ResourceProps['type']
}

const ResourceCounter = ({ resource }: ResourceCounterProps) => {
  const [total, setTotal] = useState(0)

  const handleIncrement = () => {
    setTotal(total + 1)
  }

  const handleDecrement = () => {
    if (total === 0) return
    setTotal(total - 1)
  }

  return (
    <div className={style.resourceCounter}>
      <div onClick={handleDecrement} className={style.modifier}>➖</div>
      {total}
      <Resource type={resource} />
      <div onClick={handleIncrement} className={style.modifier}>➕</div>
    </div>
  )
}

export default ResourceCounter

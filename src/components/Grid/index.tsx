import { useState } from 'react'
import { times } from 'lodash'

import Resource, { ResourceProps } from '../Resource'
import Star from '../Star'

import style from './style.module.css'

type Placement = 'BL' | 'BR' | 'TL' | 'TR' | 'none'

type CornerProps = {
  disabled: boolean
}

const Corner = ({ disabled }: CornerProps) => {
  const [isMarked, setIsMarked] = useState(false)

  const mark = () => {
    setIsMarked(!isMarked)
  }

  return (
    <div
      className={`${style.corner} ${disabled && style.disabled} ${isMarked && style.marked}`}
      onClick={mark}
    />
  )
}

const Grid = () => {
  const renderSquare = (resource: ResourceProps['type'], firstSquare: Placement) => {
    return (
      <div className={style.square}>
        <div className={style.resource}>
          <Resource type={resource} />
        </div>
        <div className={style.squareColumn}>
          <Corner disabled={firstSquare === 'TL'} />
          <Corner disabled={firstSquare === 'BL'} />
        </div>
        <div className={style.squareColumn}>
          <Corner disabled={firstSquare === 'TR'} />
          <Corner disabled={firstSquare === 'BR'} />
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className={style.starsTop}>
        {times(3, (i) => (<Star disabled key={i} />))}
      </div>
      <div className={style.gridRows}>
        <div className={style.gridColumn}>
          {renderSquare('pumpkin', 'BR')}
          {renderSquare('coin', 'none')}
          {renderSquare('heart', 'BL')}
        </div>
        <div className={style.gridColumn}>
          {renderSquare('heart', 'none')}
          {renderSquare('pumpkin', 'TL')}
          {renderSquare('coin', 'BR')}
        </div>
        <div className={style.gridColumn}>
          {renderSquare('coin', 'TR')}
          {renderSquare('heart', 'BR')}
          {renderSquare('pumpkin', 'none')}
        </div>
        <div className={style.starsRight}>
          {times(3, (i) => (<Star disabled key={i} />))}
        </div>
      </div>
    </div>
  )
}

export default Grid

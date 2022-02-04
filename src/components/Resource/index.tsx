import style from './style.module.css'
import { FaHeart } from 'react-icons/fa'
import { GiPumpkin } from 'react-icons/gi'
import { RiMoneyDollarCircleFill } from 'react-icons/ri'

export type ResourceProps = {
  type: "heart" | "coin" | "pumpkin"
  type2?: "heart" | "coin" | "pumpkin"
  cost?: boolean
  required?: '1-3' | '4-10' | '11+'
}

const pickEmoji = (type: string | undefined) => {
  switch (type) {
    case `heart`:
      return <FaHeart color="#F10000" />
    case `coin`:
      return <RiMoneyDollarCircleFill color="#E7BD0C" />
    case `pumpkin`:
      return <GiPumpkin color="#F77218" />
    default:
      return null
  }
}

const Resource = ({ type, type2, cost=false, required }: ResourceProps ) => {
  const resourceEmoji = pickEmoji(type)
  const resourceEmoji2 = pickEmoji(type2)

  return (
    <div className={style.box}>
      { required && <span className={style.required}>{required}</span> }
      { cost && <span className={style.cost}>-</span> }
      <div className={style.resources}>
        <div className={`${cost && style.resourceCost}`}>
          {resourceEmoji}
        </div> 
        <div className={style.resource2}>
        {resourceEmoji2}
        </div>
      </div>
    </div>
  )
}

export default Resource

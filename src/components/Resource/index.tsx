import style from './style.module.css'

export type ResourceProps = {
  type: "heart" | "coin" | "pumpkin"
  type2?: "heart" | "coin" | "pumpkin"
  cost?: boolean
}

const pickEmoji = (type: string | undefined) => {
  switch (type) {
    case `heart`:
      return `❤️`
    case `coin`:
      return `🪙`
    case `pumpkin`:
      return `🎃`
    default:
      return null
  }
}

const Resource = ({ type, type2, cost=false }: ResourceProps ) => {
  const resourceEmoji = pickEmoji(type)
  const resourceEmoji2 = pickEmoji(type2)

  return (
    <div className={style.resource}>
      { cost && <span className={style.cost}>-</span> }
      <div>
        {resourceEmoji}
      </div> 
      <div className={style.resource2}>
      {resourceEmoji2}
      </div>
    </div>
  )
}

export default Resource

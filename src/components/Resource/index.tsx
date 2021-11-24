import style from './style.module.css'

export type ResourceProps = {
  type: "heart" | "coin" | "pumpkin"
  type2?: "heart" | "coin" | "pumpkin"
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

const Resource = ({ type, type2 }: ResourceProps ) => {
  const resourceEmoji = pickEmoji(type)
  const resourceEmoji2 = pickEmoji(type2)

  return (
    <div className={style.resource}>
      {resourceEmoji}
      {resourceEmoji2}
    </div>
  )
}

export default Resource

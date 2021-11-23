import style from './style.module.css'

export type ResourceProps = {
  type: "heart" | "coin" | "pumpkin"
}

const Resource = ({ type }: ResourceProps ) => {
  let resourceEmoji = ``
  switch (type) {
    case `heart`:
      resourceEmoji += `❤️`
      break
    case `coin`:
      resourceEmoji += `🪙`
      break
    case `pumpkin`:
      resourceEmoji += `🎃`
      break
    default:
      resourceEmoji += `❤️`
  }
  return (
    <div className={style.resource}>
      {resourceEmoji}
    </div>
  )
}

export default Resource

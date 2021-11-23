type ArrowProps = {
  bottom?: boolean
  left?: boolean
  right?: boolean
  top?: boolean
}

const Arrow = ({
  bottom = false,
  left = false,
  right = false,
  top = false
}: ArrowProps) => {
  let arrow = '←'
  if (bottom) {
    arrow = '↓'
  }
  if (left) {
    arrow = '←'
  }
  if (right) {
    arrow = '→'
  }
  if (top) {
    arrow = '↑'
  }
  return (
    <div>{arrow}</div>
  )
}

export default Arrow

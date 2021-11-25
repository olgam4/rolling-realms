import style from './style.module.css'

type Props = {
  children?: React.ReactNode
}

const Hourglass = ({ children }: Props) => {
  return (
    <div className={style.hourglass}>
      ⏳
      {children}
    </div>
  )
}

export default Hourglass

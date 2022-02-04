import style from './style.module.css'
import { GiHourglass } from 'react-icons/gi'

type Props = {
  children?: React.ReactNode
}

const Hourglass = ({ children }: Props) => {
  return (
    <div className={style.hourglass}>
      <GiHourglass size={20} />
      {children}
    </div>
  )
}

export default Hourglass

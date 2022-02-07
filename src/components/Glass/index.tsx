import { useState } from 'react'
import { FaTimes, FaWineBottle } from 'react-icons/fa'

import style from './style.module.css'

type GlassProps = {
  value: number
}

const Glass = ({ value }: GlassProps) => {
  const [marked, setMarked] = useState(false)
  
  const toggleMark = () => setMarked(!marked)

  return (
    <div className={style.glass} onClick={toggleMark}>
      {`${value}`} <FaWineBottle />
      {marked &&
        <div className={style.cross}><FaTimes size="22px" color="#C21807" /></div>
      }
    </div>
  )
}

export default Glass

import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'

import style from './style.module.css'

type OneCheckProps = {
  children: React.ReactElement
}

const OneCheck = ({ children }: OneCheckProps) => {
  const [marked, setMarked] = useState(false)

  const toggleMark = () => setMarked(!marked)

  return (
    <div className={style.check} onClick={toggleMark}>
      {children}
      {marked &&
        <div className={style.cross}><FaTimes size="30px" color="#C21807" /></div>
      }
    </div>
  )
}

export default OneCheck

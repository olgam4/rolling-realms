import DieInput from '../DieInput'

import style from './style.module.css'

const Cube = () => {
  return (
    <div
      className={style.cube}
    >
      <div className={`${style.diamond} ${style.top}`}>
        <div className={style.content}>
          <DieInput big noBorder />
        </div>
      </div>
      <div className={`${style.diamond} ${style.left}`}>
        <div className={style.content}>
          <DieInput big noBorder />
        </div>
      </div>
      <div className={`${style.diamond} ${style.right}`}>
        <div className={style.content}>
          <DieInput big noBorder />
        </div>
      </div>
    </div>
  )
}

export default Cube

import DieInput from '../DieInput'
import Star from '../Star'

import style from './style.module.css'

const Pyramid = () => {
  return (
    <div className={style.pyramid}>
      <div className={style.firstRow}>
        <Star disabled />
      </div>
      <div className={style.secondRow}>
        <DieInput big />
        <DieInput big />
        <div className={style.stars}>
          <Star disabled />
          <Star disabled />
        </div>
      </div>
      <div className={style.thirdRow}>
        <DieInput big />
        <DieInput big />
        <DieInput big />
        <div className={style.stars}>
          <Star disabled />
          <Star disabled />
          <Star disabled />
        </div>
      </div>
      <div className={style.fourthRow}>
        <DieInput big />
        <DieInput big />
        <DieInput big />
        <DieInput big />
      </div>
    </div>
  )
}

 export default Pyramid

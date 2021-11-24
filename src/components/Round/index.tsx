import ScoreInput from '../ScoreInput'
import DieRandomizer from '../DieRandomizer'
import DieInput from '../DieInput'
import ResourceCounter from '../ResourceCounter'
import RealmSelector from '../RealmSelector'

import style from './style.module.css'

const Round = () => {
  return (
    <div className={style.round}>
      <div className={style.roundHeader}>
        <ScoreInput />
        <div className={style.turnsBox}>
          <div className={style.title}>TURNS</div>
          <div className={style.turns}>
            <div>
              <div className={style.turn}>1 <DieInput /><DieInput /></div>
              <div className={style.turn}>4 <DieInput /><DieInput /></div>
              <div className={style.turn}>7 <DieInput /><DieInput /></div>
            </div>
            <div>
              <div className={style.turn}>2 <DieInput /><DieInput /></div>
              <div className={style.turn}>5 <DieInput /><DieInput /></div>
              <div className={style.turn}>8 <DieInput /><DieInput /></div>
            </div>
            <div>
              <div className={style.turn}>3<DieInput /><DieInput /></div>
              <div className={style.turn}>6<DieInput /><DieInput /></div>
              <div className={style.turn}>9<DieInput /><DieInput /></div>
            </div>
          </div>
        </div>
        <DieRandomizer />
        <ResourceCounter resource="pumpkin" />
        <ResourceCounter resource="heart" />
        <ResourceCounter resource="coin" />
      </div>
      <div className={style.realms}>
        <RealmSelector />
        <RealmSelector />
        <RealmSelector />
      </div>
    </div>
  )
}

export default Round

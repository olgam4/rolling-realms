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
              <div className={style.turn}><DieInput /><DieInput /></div>
              <div className={style.turn}><DieInput /><DieInput /></div>
              <div className={style.turn}><DieInput /><DieInput /></div>
            </div>
            <div>
              <div className={style.turn}><DieInput /><DieInput /></div>
              <div className={style.turn}><DieInput /><DieInput /></div>
              <div className={style.turn}><DieInput /><DieInput /></div>
            </div>
            <div>
              <div className={style.turn}><DieInput /><DieInput /></div>
              <div className={style.turn}><DieInput /><DieInput /></div>
              <div className={style.turn}><DieInput /><DieInput /></div>
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
      </div>
    </div>
  )
}

export default Round

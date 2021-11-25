import { useTranslation } from 'react-i18next'

import Grid from '../../Grid'

import pattern from './images/patterns.png'
import style from './style.module.css'

const Tapestry = () => {
  const { t } = useTranslation()

  return (
    <div>
      {t('tapestry')}
      <div className={style.content}>
        <Grid />
        <img src={pattern} alt="Patterns" className={style.pattern} />
      </div>
    </div>
  )
}

export default Tapestry

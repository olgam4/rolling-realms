import { useTranslation } from 'react-i18next'

import style from './style.module.css'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <div className={style.footer}>
      <div className={style.stonemaiergames}>
        <a href="https://stonemaiergames.com/games/rolling-realms/" target="_blank" rel="noreferrer">
          {t('creditsSM')}
        </a>
      </div>
      <div className={style.copyright}>
        {t('copyright')}
        <div className={style.github}>
          <a href="https://github.com/olgam4/rolling-realms" target="_blank" rel="noreferrer">
            {t('github')}
          </a>
        </div>
      </div>
      <div>
        <a href="https://github.com/olgam4/rolling-realms/issues" target="_blank" rel="noreferrer">
          {t('report')}
        </a>
      </div>
    </div>
  )
}

export default Footer

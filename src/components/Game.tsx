import Round from './Round'

import { useTranslation } from 'react-i18next'

const Game = () => {
  const { t } = useTranslation()
  return (
    <div>
      <div>{t('header')}</div>
      <Round />
    </div>
  )
}

export default Game

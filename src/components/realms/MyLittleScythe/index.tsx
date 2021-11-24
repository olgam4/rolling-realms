import { useTranslation } from 'react-i18next'
import HexagonPack from '../../HexagonPack'

import Resource from '../../Resource'
import Score from '../../Score'

import style from './style.module.css'

const MyLittleScythe = () => {
  const { t } = useTranslation()

  return (
    <div>
      <div>{t('mylittlescythe')}</div>
      <div className={style.hexs}>
        <HexagonPack>
          <Resource type="pumpkin" />
        </HexagonPack>
        <HexagonPack>
          <Resource type="heart" />
        </HexagonPack>
      </div>
      <Score />
    </div>
  )
}

export default MyLittleScythe

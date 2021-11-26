import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import Draggable from 'react-draggable'

import style from './style.module.css'
import Resource from '../../Resource'

const RulesToggler = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'rules' })

  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <div className={style.toggler} onClick={toggle}>
        📝
      </div>
      <Draggable>
        <div className={`${style.rules} ${isOpen && style.visible}`}>
          <div className={style.header}>
            <div className={style.title}>{t('title')}</div>
            <span className={style.drag}>{t('drag')}</span>
          </div>
          <div className={style.rule}><Resource type="pumpkin" cost />{t('pumpkin2')}</div>
          <div className={style.rule}><Resource type="pumpkin" cost />{t('pumpkin3')}</div>
          <div className={style.rule}><Resource type="heart" cost />{t('heart2')}</div>
          <div className={style.rule}><Resource type="heart" cost />{t('heart3')}</div>
          <div className={style.rule}><Resource type="coin" cost />{t('coin2')}</div>
          <div className={style.rule}><Resource type="coin" cost />{t('coinX')}</div>
          <div className={style.separator} />
          <div>{t('reuse')}</div>
          <div>{t('original')}</div>
          <div>{t('earned')}</div>
          <div>{t('resourcesround')}</div>
        </div>
      </Draggable>
    </div>
  )
}

export default RulesToggler

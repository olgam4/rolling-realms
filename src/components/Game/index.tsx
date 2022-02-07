import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { HiOutlineClipboardCheck } from 'react-icons/hi'

import Round from '../Round'
import ScoreInput from '../ScoreInput'

import useRealms from '../../hooks/useRealms'

import stonemaierLogo from '../../images/stonemaier-logo.png'
import style from './style.module.css'

// TODO: Put hashing in another component

const Game = () => {
  const notificationRef = useRef(document.createElement('div'))
  const { t } = useTranslation()
  const { randomizeRealms, setRealmsFromHash, hash } = useRealms()
  const [newHash, setHash] = useState(hash)
  const [changingHash, setChangingHash] = useState(false)

  useEffect(() => {
    if(notificationRef.current != null) notificationRef.current.addEventListener('animationend', () => {
      if (notificationRef.current) notificationRef.current.style.display = 'none'
    })
  })
  
  const toggleChangingHash = () => {
    setChangingHash(!changingHash)
    setHash(hash)
  }

  const changeHash = () => {
    setRealmsFromHash(newHash.toUpperCase())
    setChangingHash(false)
  }

  const onKeyPressHash = (event: any) => {
    if (event.key === 'Enter') changeHash()
  }

  const copyHashToClipBoard = () => {
    navigator.clipboard.writeText(hash)
    if (notificationRef.current) notificationRef.current.style.display = 'block'
  }

  return (
    <div className={style.game}>
      <div>
        <div className={style.header}>
          <img className={style.smLogo} src={stonemaierLogo} alt={t('smlogo')}/>
          <div className={style.title}>{t('title')}</div>
          <div className={style.author}>{t('author')}</div>
        </div>
        <div className={style.details}>
          <div className={style.description}>{t('description')}</div>
          <div className={style.totalScore}>
            <ScoreInput disabled />
          </div>
          <div className={style.realmsHashing}>
            {changingHash ?
              <input
                className={style.inputHash}
                type="text"
                value={newHash}
                onChange={(e) => setHash(e.target.value)}
                onBlur={changeHash}
                onKeyPress={onKeyPressHash}
                autoFocus
              />
              :
              <div className={style.hashAndClipboard}>
                <div className={style.hash} onClick={toggleChangingHash}>{hash}</div>
                <div onClick={copyHashToClipBoard}><HiOutlineClipboardCheck /></div>
                <div className={style.notification} ref={notificationRef}>
                  {t('clipboard')}
                </div>
              </div>
            }
            <button className={style.reset} onClick={randomizeRealms}>{t('reroll')}</button>
          </div>
        </div>
      </div>
      <Round number={1} />
      <Round number={2} />
      <Round number={3} />
    </div>
  )
}

export default Game

import { useState } from 'react'

import LanguageSelector from '../LanguageSelector'
import RulesToggler from '../RulesToggler'
import ThemeToggler from '../ThemeToggler'

import style from './style.module.css'

const MenuToggler = () => {
  const [isOpen, setIsOpen] = useState(true)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div className={`${style.menu} ${isOpen && style.visible}`}>
      <div
        className={`${style.toggle} ${isOpen && style.visible}`}
        onClick={toggle}
      >
        &lt;
      </div>
      <div className={`${style.buttons}`}>
        <LanguageSelector />
        <div className={style.divider} />
        <RulesToggler />
        <div className={style.divider} />
        <ThemeToggler />
      </div>
    </div>
  )
}

export default MenuToggler

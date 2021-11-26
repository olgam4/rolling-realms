import useTheme from '../../../hooks/useTheme'

import style from './style.module.css'

const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      className={style.themeToggler}
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
    >
      {theme === 'light' ? '🌘' : '☀️'}
    </button>
  )
}

export default ThemeToggler

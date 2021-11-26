import style from './style.module.css'

type Props = {
  theme : any
  toggleTheme : any
}

const ThemeToggler = ({ theme, toggleTheme}: Props) => {
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

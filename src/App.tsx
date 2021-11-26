import { Suspense, useState } from 'react'

import Game from './components/Game'
import Footer from './components/Footer'
import LanguageSelector from './components/togglers/LanguageSelector'
import ThemeToggler from './components/togglers/ThemeToggler'
import RulesToggler from './components/togglers/RulesToggler'

import './App.css'

function App() {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <Suspense fallback={<div/>}>
      <div className="App" data-theme={theme}>
        <Game />
        <Footer />
        <ThemeToggler theme={theme} toggleTheme={toggleTheme} />
        <RulesToggler />
        <LanguageSelector />
      </div>
    </Suspense>
  );
}

export default App;

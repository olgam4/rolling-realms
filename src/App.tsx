import { useState } from 'react'

import Game from './components/Game'
import Footer from './components/Footer'
import ThemeToggler from './components/ThemeToggler';

import './App.css'
import LanguageSelector from './components/LanguageSelector';

function App() {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="App" data-theme={theme}>
      <Game />
      <Footer />
      <ThemeToggler theme={theme} toggleTheme={toggleTheme} />
      <LanguageSelector />
    </div>
  );
}

export default App;

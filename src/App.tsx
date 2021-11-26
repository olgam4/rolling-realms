import { Suspense, useState } from 'react'

import Game from './components/Game'
import Footer from './components/Footer'
import MenuToggler from './components/togglers/MenuToggler'

import './App.css'

function App() {
  // const [theme, setTheme] = useState('light')
  // const toggleTheme = () => {
  //   setTheme(theme === 'light' ? 'dark' : 'light')
  // }

  return (
    <Suspense fallback={<div/>}>
      <div className="App" data-theme="light">
        <Game />
        <Footer />
        <MenuToggler />
      </div>
    </Suspense>
  );
}

export default App;

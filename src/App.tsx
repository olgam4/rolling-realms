import { Suspense } from 'react'

import useTheme from './hooks/useTheme'

import Game from './components/Game'
import Footer from './components/Footer'
import MenuToggler from './components/togglers/MenuToggler'

import './App.css'

function App() {
  const { theme } = useTheme()

  return (
    <Suspense fallback={<div/>}>
      <div className="App" data-theme={theme}>
        <Game />
        <Footer />
        <MenuToggler />
      </div>
    </Suspense>
  );
}

export default App;

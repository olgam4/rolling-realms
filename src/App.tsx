import { Suspense } from 'react'

import { ScoreProvider } from './hooks/useScore'
import useTheme from './hooks/useTheme'

import Game from './components/Game'
import Footer from './components/Footer'
import MenuToggler from './components/togglers/MenuToggler'

import './App.css'
import { RealmsProvider } from './hooks/useRealms'

function App() {
  const { theme } = useTheme()

  return (
    <Suspense fallback={<div/>}>
      <div className="App" data-theme={theme}>
        <ScoreProvider>
          <RealmsProvider>
            <Game />
          </RealmsProvider>
        </ScoreProvider>
        <Footer />
        <MenuToggler />
      </div>
    </Suspense>
  );
}

export default App;

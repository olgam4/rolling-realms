import { useContext } from 'react'
import { Provider, setupContext } from './base'

type Themes = "light" | "dark"

type State = {
  theme: Themes
}

type Action = {
  type: "LIGHTMODE" | "DARKMODE"
}

const ThemeContext = setupContext<State, Action>()

const savedTheme: Themes = localStorage.getItem("theme") as unknown as Themes  || "light"

const defaultState: State = {
  theme: savedTheme
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "LIGHTMODE":
      localStorage.setItem("theme", "light")
      return { theme: "light" }
    case "DARKMODE":
      localStorage.setItem("theme", "dark")
      return { theme: "dark" }
    default:
      return state
  }
}

export const { ProviderComponent: ThemeProvider } = Provider(ThemeContext, reducer, defaultState)

const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined || context === null) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }

  const toggleTheme = () => {
    context.dispatch({ type: context.state.theme === "light" ? "DARKMODE" : "LIGHTMODE" })
  }

  const theme = context.state.theme

  return { theme, toggleTheme }
}

export default useTheme

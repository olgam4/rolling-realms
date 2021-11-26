import { createContext, useReducer, ReactElement, useContext } from 'react'

type Themes = "light" | "dark"

type State = {
  theme: Themes
}

type Action = {
  type: "LIGHTMODE" | "DARKMODE"
}

type ContextType = {
  state: State
  dispatch: React.Dispatch<Action>;
}

export const ThemeContext = createContext<ContextType | null>(null)

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

type Props = {
  children: ReactElement
}

export const ThemeProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, defaultState)

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  )
}

const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }

  if (context === null) {
    return { theme: '', toggleTheme: () => {} }
  }

  const toggleTheme = () => {
    context.dispatch({ type: context.state.theme === "light" ? "DARKMODE" : "LIGHTMODE" })
  }

  const theme = context.state.theme

  return { theme, toggleTheme }
}

export default useTheme

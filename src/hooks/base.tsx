import { createContext, useReducer, Dispatch, ReactElement, Context } from 'react'

type ContextType<S, A> = {
  state: S
  dispatch: Dispatch<A>;
}

export function setupContext<State, Action>(): Context<ContextType<State, Action> | null> {
  return createContext<ContextType<State, Action> | null>(null)
}

type ProviderProps = {
  children: ReactElement
}

export function Provider(
  Context: any,
  reducer: (state: any, action: any) => any,
  defaultState: any
) {
  const ProviderComponent = ({ children }: ProviderProps) => {
    const [state, dispatch] = useReducer(reducer, defaultState)

    return (
      <Context.Provider value={{ state, dispatch }}>
        {children}
      </Context.Provider>
    )
  }

  return {
    ProviderComponent
  }
}

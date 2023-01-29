import React, { createContext, useMemo, useReducer, ReactNode } from 'react'
import { initialState, IContext } from './initialState'
import { actions } from './actions'
import reducer from './reducer'

interface IProvider {
  state: IContext
  dispatch: React.Dispatch<any>
  increaseCount: () => void
}

export const Context = createContext<IProvider>(undefined)

export default function ContextProvider ({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const value: IProvider = useMemo(() => {
    return { ...actions(state, dispatch) }
  }, [state])

  return (
    <Context.Provider value={value}>
      {/* <Context.Provider value={{ ...actions(state, dispatch) }}> */}
      { children }
    </Context.Provider>
  )
}

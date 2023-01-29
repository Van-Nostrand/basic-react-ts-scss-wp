import React, { createContext, useMemo, useReducer, ReactNode } from 'react'
import { initialState, INavContext } from './initialState'
import { actions } from './actions'
import reducer from './reducer'

interface INavProvider {
  state: INavContext
  dispatch: React.Dispatch<any>
  setNav: (v: boolean) => void
}

export const NavContext = createContext<INavProvider>(undefined)

export default function NavContextProvider ({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const value: INavProvider = useMemo(() => {
    return { ...actions(state, dispatch) }
  }, [state])

  return (
    <NavContext.Provider value={value}>
      { children }
    </NavContext.Provider>
  )
}

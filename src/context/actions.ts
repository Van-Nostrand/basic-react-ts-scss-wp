import React from 'react'
import { IContext } from './initialState'

export const actions = (state: IContext, dispatch: React.Dispatch<any>) => ({
  state,
  dispatch,
  openNav: () => dispatch({ type: 'open-nav' }),
  closeNav: () => dispatch({ type: 'close-nav' }),
  setNav: (v: boolean) => dispatch({ type: 'set-nav', payload: v })
})
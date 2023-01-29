import React from 'react'
import { IContext } from './initialState'

export const actions = (state: IContext, dispatch: React.Dispatch<any>) => ({
  state,
  dispatch,
  increaseCount: () => dispatch({ type: 'increase-count' })
})

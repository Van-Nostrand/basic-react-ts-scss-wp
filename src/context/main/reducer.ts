import { IContext } from './initialState'

interface IAction {
  payload?: any
  type: string
}

export default function reducer (state: IContext, action: IAction) {
  switch (action.type) {
    case 'open-nav':
      return {
        ...state, openNav: true
      }
    case 'close-nav':
      return {
        ...state, openNav: false
      }
    case 'set-nav':
      return {
        ...state, openNav: action.payload
      }
    case 'increase-count':
      return {
        ...state, counter: state.counter + 1
      }
    default: return state
  }
}

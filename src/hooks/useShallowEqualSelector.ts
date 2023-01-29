import { useSelector, shallowEqual } from 'react-redux'

export function useShallowEqualSelector <TState, TSelected> (selector: (state: TState) => TSelected) {
  return useSelector(selector, shallowEqual)
}

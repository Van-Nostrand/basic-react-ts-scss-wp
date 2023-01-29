import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useShallowEqualSelector } from '@/hooks/useShallowEqualSelector'

import { increment } from '@/store/counterSlice'
import { IRootStore } from '@/types'

export default function Card () {
  const { count, open } = useShallowEqualSelector((state: IRootStore) => ({
    count: state.counter.value,
    open: state.nav.open
  }))
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('CARD just updated')
  })

  return (
    <div style={{
      width: '300px',
      height: '500px',
      fontSize: '28px'
    }}>
      <span>I AM A CARD</span>
      <button onClick={() => dispatch(increment())}>Click me</button>
      <div> the count is { count }</div>
      <div> nav is open? { open }</div>
    </div>
  )
}

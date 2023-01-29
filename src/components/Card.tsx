import React, { useEffect } from 'react'
// import { Context } from '@/context/main'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '@/store/counterSlice'
import { IRootStore } from '@/types'

export default function Card () {
  const count = useSelector((state: IRootStore) => state.counter.value)
  const dispatch = useDispatch()
  // const context = useContext(Context)

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
    </div>
  )
}

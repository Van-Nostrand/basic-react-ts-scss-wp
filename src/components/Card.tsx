import React, { useEffect, useContext } from 'react'
import { Context } from '@/context/main'

export default function Card () {
  const context = useContext(Context)

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
      <button onClick={context.increaseCount}>Click me</button>
      <div> the count is { context.state.counter }</div>
    </div>
  )
}

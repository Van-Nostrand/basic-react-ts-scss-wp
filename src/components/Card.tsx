import React, { useEffect } from 'react'

export default function Card () {
  useEffect(() => {
    console.log('CARD just updated')
  })
  return (
    <div>I AM A CARD</div>
  )
}

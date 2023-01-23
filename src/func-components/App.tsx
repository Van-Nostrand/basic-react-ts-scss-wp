import React, { useState, useEffect } from 'react'
import Welcome from './Welcome'
import withUser from './withUser'
import withLoader from './withLoader'

export default function App () {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true)
    }, 2000)
  }, [])
  const WrappedWelcome = withLoader(withUser(Welcome))
  return (
    <div className="text-center">
      <h2>develop react stuff</h2>
      <h2>with new hoc patterns</h2>
      <WrappedWelcome user="mike" isLoaded={loaded} />
    </div>
  )
}

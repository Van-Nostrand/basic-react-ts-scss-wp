import React, { useEffect, useContext } from 'react'
import { NavContext } from '@/context/nav'
import '@/scss/components/_navbar.scss'

export default function Navbar () {
  const context = useContext(NavContext)

  const navDrawerClass = [
    'nav__drawer',
    context.state.openNav ? 'nav__drawer--open' : ''
  ].join(' ')

  useEffect(() => {
    console.log('Navbar just updated')
  })

  return (
    <nav className="nav">
      <div className="nav__inner">
        <div className="nav__logo">
          logo
        </div>

        <button
          className="nav__hamburger"
          onClick={() => context.setNav(!context.state.openNav)}
        >
          BURGER
        </button>

      </div>
      <div className={navDrawerClass}>
        nav drawer
      </div>
    </nav>
  )
}

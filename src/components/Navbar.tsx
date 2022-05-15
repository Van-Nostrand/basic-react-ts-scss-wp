import React from 'react'
import '@/scss/components/_navbar.scss'

export default function Navbar () {

  const [ navIsOpen, setNavIsOpen ] = React.useState(false)

  const navDrawerClass = [
    'nav__drawer',
    navIsOpen ? 'nav__drawer--open' : ''
  ].join(' ')

  return (
    <nav className="nav">
      <div className="nav__inner">

        <div className="nav__logo">logo</div>

        <button
          className="nav__hamburger"
          onClick={() => setNavIsOpen(!navIsOpen)}
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

import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { NavContext } from '@/context/nav'
import { setOpen } from '@/store/navSlice'
import '@/scss/components/_navbar.scss'
import { IRootStore } from '@/types'

export default function Navbar () {
  const open = useSelector((state: IRootStore) => state.nav.open)
  const dispatch = useDispatch()
  // const context = useContext(NavContext)

  const navDrawerClass = [
    'nav__drawer',
    open ? 'nav__drawer--open' : ''
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
          onClick={() => dispatch(setOpen(!open))}
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

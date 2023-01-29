import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useShallowEqualSelector } from '@/hooks/useShallowEqualSelector'

import { setOpen, setShowMore } from '@/store/navSlice'
import NavDrawer from './NavDrawer'
import '@/scss/components/_navbar.scss'
import { IRootStore } from '@/types'

export default function Navbar () {
  const { open, showMore } = useShallowEqualSelector((state: IRootStore) => ({
    open: state.nav.open,
    showMore: state.nav.showMore
  }))
  const dispatch = useDispatch()

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
        <button onClick={() => dispatch(setShowMore(!showMore))}>show more?</button>
        <NavDrawer />
      </div>
    </nav>
  )
}

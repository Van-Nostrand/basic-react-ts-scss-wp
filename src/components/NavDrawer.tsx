import React, { useEffect } from 'react'
import { useShallowEqualSelector } from '@/hooks/useShallowEqualSelector'
import { IRootStore } from '@/types'

export default function NavDrawer () {
  const { showMore } = useShallowEqualSelector((state: IRootStore) => ({
    showMore: state.nav.showMore
  }))

  useEffect(() => {
    console.log('NavDrawer just updated')
  })

  return (
    <div className="nav-drawer-component">
      <span>DRAWER CONTENT</span>
      {showMore && (
        <div>MOAR CONTENT</div>
      )}
    </div>
  )
}

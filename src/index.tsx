import React from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/App'
import ContextProvider from '@/context/main'
import NavContextProvider from '@/context/nav'
import '@/scss/main.scss'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <NavContextProvider>
    <ContextProvider>
      <App />
    </ContextProvider>
  </NavContextProvider>
)

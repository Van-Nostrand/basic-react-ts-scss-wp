import React from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/App'
import ContextProvider from '@/context'
import '@/scss/main.scss'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
)

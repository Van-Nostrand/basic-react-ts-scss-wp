import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from '@/store'
import App from '@/App'
import ContextProvider from '@/context/main'
import NavContextProvider from '@/context/nav'
import '@/scss/main.scss'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <Provider store={store}>
    <NavContextProvider>
      <ContextProvider>
        <App />
      </ContextProvider>
    </NavContextProvider>
  </Provider>
)

import React from 'react'
import Welcome from './Welcome'
import withUser from './withUser'
import withLoader from './withLoader'

import './App.css'

export default class App extends React.Component {
  state = {
    loaded: false
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({ loaded: true })
    }, 2000)
  }

  render () {
    const WrappedWelcome = withLoader(withUser(Welcome))
    return (
      <div className="text-center">
        <h2>develop react stuff</h2>
        <h2>with new hoc patterns</h2>
        <WrappedWelcome user="mike" isLoaded={this.state.loaded} />
      </div>
    )
  }
}

import React from 'react'

interface IWelcomeProps {
  user: any
  isLoaded?: boolean
}

export default class Welcome extends React.Component<IWelcomeProps> {
  render () {
    return (
      <div>WELCOME {this.props.user}</div>
    )
  }
}

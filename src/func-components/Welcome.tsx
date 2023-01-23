import React from 'react'

interface IWelcomeProps {
  user?: string
  isLoaded?: boolean
}

export default function Welcome (props: IWelcomeProps) {
  return <div>WELCOME {props.user}</div>
}

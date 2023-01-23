import React from 'react'

const withUser = (WrappedComponent: any) => {
  return class extends React.Component<{ user?: any, isLoaded?: boolean }> {
    render () {
      if (this.props.user) {
        return (
          <WrappedComponent {...this.props} />
        )
      }
      return <div>Welcome guest! </div>
    }
  }
}

export default withUser

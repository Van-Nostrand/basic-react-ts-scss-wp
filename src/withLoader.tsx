import React from 'react'

const withLoader = (WrappedComponent: typeof React.Component) => {
  return class extends WrappedComponent<any, any> {
    render () {
      const { isLoaded } = this.props
      if (!isLoaded) {
        return <div>Loading...</div>
      }
      // console.log('WHAT IS SUPER', super)
      return super.render()
    }
  }
}

export default withLoader

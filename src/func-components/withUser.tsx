import React from 'react'

const withUser = (WrappedComponent: React.FC<any>) => {
  return function (props: any) {
    if (props.user) {
      return <WrappedComponent {...props} />
    }
    return <div>Welcome Guest!</div>
  }
}

export default withUser

import React from 'react'

export default function withLoader (WrappedComponent: React.FC<any>) {
  return function (props: any) {
    if (!props.isLoaded) {
      return <div>Loading...</div>
    }
    return <WrappedComponent {...props} />
  }
}

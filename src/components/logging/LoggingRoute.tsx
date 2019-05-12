import React from 'react'
import { Route, RouteComponentProps, RouteProps } from 'react-router-dom'

const LoggingRoute = ({ component: Component, ...rest }: RouteProps) => {
  const renderFn = (props: RouteComponentProps<{ eid: string }>) => {
    if (!Component) {
      throw Error('component is undefined')
    }
    alert(`Route is logging: ${props.match.params.eid}`)
    return <Component {...props} />
  }

  return <Route {...rest} render={renderFn} />
}

export default LoggingRoute

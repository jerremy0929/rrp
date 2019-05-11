import React from 'react'
import { Route, RouteComponentProps } from 'react-router-dom'

const LoggingRoute: React.FC<{
  component: React.ComponentType<
    Pick<RouteComponentProps<{ eid: string }>, any>
  >
  path: string
}> = ({ component: Component, path }) => {
  const renderFn = (props: RouteComponentProps<{ eid: string }>) => {
    alert(`Route is logging: ${props.match.params.eid}`)
    return <Component {...props} />
  }

  return <Route path={path} render={renderFn} />
}

export default LoggingRoute

import React from 'react'
import {
  RouteComponentProps,
  RouteProps,
  Route,
  Redirect,
} from 'react-router-dom'
import authService from '../../services/authService'

const PrivateRoute = ({ component: Component, ...rest }: RouteProps) => {
  if (!Component) {
    throw Error('component is undefined')
  }

  const render = (props: RouteComponentProps<any>): React.ReactNode => {
    if (authService.isAuthenticated()) {
      return <Component {...props} />
    }
    return (
      <Redirect
        to={{
          pathname: '/login',
          state: { target: props.location },
        }}
      />
    )
  }

  return <Route {...rest} render={render} />
}

export default PrivateRoute

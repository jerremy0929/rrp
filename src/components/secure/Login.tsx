import React from 'react'
import authService from '../../services/authService'
import {
  Button,
  ControlLabel,
  Form,
  FormControl,
  FormGroup,
} from 'react-bootstrap'
import { Redirect, RouteComponentProps } from 'react-router-dom'

class Login extends React.Component<RouteComponentProps> {
  state = {
    loggedIn: authService.isAuthenticated(),
  }

  render = () => {
    const { target } = this.props.location.state || {
      target: { pathname: '/private' },
    }

    if (this.state.loggedIn) {
      return <Redirect to={target} />
    }

    return (
      <div style={{ width: 200 }}>
        <h1>Sign In</h1>

        <Form horizontal={true}>
          <FormGroup>
            <ControlLabel>Email Address</ControlLabel>
            <FormControl type="string" placeholder="Email" size={40} />

            <ControlLabel>Password</ControlLabel>
            <FormControl type="password" placeholder="Password" size={40} />

            <Button className="btn btn-primary" onClick={this.login}>
              Sign in
            </Button>
          </FormGroup>
        </Form>
      </div>
    )
  }

  login = () => {
    authService.signIn(() => {
      this.setState({
        loggedIn: authService.isAuthenticated(),
      })
    })
  }
}

export default Login

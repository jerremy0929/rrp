import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import LoggingHome from './components/logging/LoggingHome'
import ColorSwatch from './components/color/ColorSwatch'
import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'
import NameForm from './components/prompt/NameForm'
import PropViewer from './components/PropViewer'
import PageNotFound from './components/PageNotFound'
import PrivateRoute from './components/secure/PrivateRoute'
import ProtectedHome from './components/secure/ProtectedHome'
import Login from './components/secure/Login'
import Logout from './components/secure/Logout'
import SmartColorSwatch from './components/color/SmartColorSwatch'
import People from './components/people/People'
import PersonProfileContainer from './container/PersonProfileContainer'

const App = () => {
  const renderColor = () => <ColorSwatch color="#f00" text="Red" />

  return (
    <Router>
      <div>
        <Header />
        <Sidebar />
        <div className="rightContentContainer">
          <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/logging" component={LoggingHome} />
            <Route path="/color/:text/:color" component={SmartColorSwatch} />
            <Route path="/color" render={renderColor} />
            <Route path="/people/:id" component={PersonProfileContainer} />
            <Route path="/people" component={People} />
            <Route path="/prompt" component={NameForm} />
            <Route path="/props" component={PropViewer} />
            <PrivateRoute path="/private" component={ProtectedHome} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App

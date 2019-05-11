import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import LoggingHome from './components/logging/LoggingHome'
import ColorSwatch from './components/ColorSwatch'
import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'
import NameForm from './components/prompt/NameForm'
import PropViewer from './components/PropViewer'
import PageNotFound from './components/PageNotFound'

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
            <Route path="/color" render={renderColor} />
            <Route path="/prompt" component={NameForm} />
            <Route path="/props" component={PropViewer} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App

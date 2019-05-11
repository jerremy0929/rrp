import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'
import NameForm from './components/prompt/NameForm'
import PropViewer from './components/PropViewer'
import PageNotFound from './components/PageNotFound'

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Sidebar />
        <div className="rightContentContainer">
          <Switch>
            <Route path="/" component={Home} exact={true} />
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

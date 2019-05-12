import React from 'react'
import { Store } from 'redux'
import { Route } from 'react-router-dom'

import PeopleContainer from './containers/PeopleContainer'
import PlacesContainer from './containers/PlacesContainer'
import Header from './components/Header'
import Home from './components/Home'

const App: React.FC<{ store: Store }> = props => {
  const renderPeople = () => <PeopleContainer store={props.store} />
  const renderPlace = () => <PlacesContainer store={props.store} />

  return (
    <div>
      <div>
        <Header />
        <Route path={'/'} component={Home} exact={true} />
        <Route path="/people" render={renderPeople} />
        <Route path="/places" render={renderPlace} />
      </div>
    </div>
  )
}

export default App

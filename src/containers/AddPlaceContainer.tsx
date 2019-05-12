import React from 'react'
import { Store } from 'redux'
import AddPlace from '../components/AddPlace'
import { addPlace } from '../store/actions/places'

class AddPlaceContainer extends React.Component<{ store: Store }> {
  render() {
    return <AddPlace handleAddPlace={this.handleAddPlace} />
  }

  handleAddPlace = (placeName: string) => {
    this.props.store.dispatch(addPlace(placeName))
  }
}

export default AddPlaceContainer

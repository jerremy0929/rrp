import React from 'react'
import { Store } from 'redux'
import { Table } from 'react-bootstrap'

import { Places } from '../types'
import Place from '../components/Place'
import AddPlaceContainer from './AddPlaceContainer'
import { deletePlace } from '../store/actions/places'

const style: React.CSSProperties = {
  width: 800,
  padding: 20,
  margin: '0 auto',
  backgroundColor: '#FF9B45',
}

class PlacesContainer extends React.Component<{ store: Store }> {
  state: Places = { places: [] }

  componentWillMount = () => {
    this.props.store.subscribe(this.storeChanged)
    this.storeChanged()
  }

  render() {
    return (
      <div style={style}>
        <h1>Places</h1>
        <Table striped={false} responsive={true} bordered={false}>
          <thead>
            <tr>
              <th>Name</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {this.state.places.map((place, idx) => (
              <Place
                key={idx}
                name={place.name}
                handleDelete={this.onHandleDelete}
              />
            ))}
          </tbody>
        </Table>
        <hr />
        <AddPlaceContainer store={this.props.store} />
      </div>
    )
  }

  storeChanged = () => {
    this.setState({
      places: this.props.store.getState().places,
    })
  }

  onHandleDelete = (placeName: string) => {
    this.props.store.dispatch(deletePlace(placeName))
  }
}

export default PlacesContainer

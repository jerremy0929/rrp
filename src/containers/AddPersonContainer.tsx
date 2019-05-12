import React from 'react'
import { Store } from 'redux'
import AddPerson from '../components/AddPerson'
import { addPerson } from '../store/actions/people'

class AddPersonContainer extends React.Component<{ store: Store }> {
  render() {
    return <AddPerson handleAddPerson={this.handleAddNewPerson} />
  }

  handleAddNewPerson = (
    firstName: string,
    lastName: string,
    occupation: string,
  ) => {
    this.props.store.dispatch(addPerson(firstName, lastName, occupation))
  }
}

export default AddPersonContainer

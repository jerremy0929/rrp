import React from 'react'
import { Store } from 'redux'
import { Table } from 'react-bootstrap'

import { People } from '../types'
import Person from '../components/Person'
import AddPersonContainer from './AddPersonContainer'
import { deletePerson } from '../store/actions/people'

const style: React.CSSProperties = {
  width: 800,
  padding: 20,
  margin: '0 auto',
  backgroundColor: '#5897E2',
}

class PeopleContainer extends React.Component<{ store: Store }> {
  state: People = { people: [] }

  componentWillMount = () => {
    this.props.store.subscribe(this.storeChanged)
    this.storeChanged()
  }

  render() {
    return (
      <div style={style}>
        <h1>People</h1>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Occupation</th>
              <th>&nbsp;</th>
            </tr>
            {this.state.people.map((person, idx) => (
              <Person
                key={idx}
                first={person.firstName}
                last={person.lastName}
                occupation={person.occupation}
                onDelete={this.handleDelete}
              />
            ))}
          </thead>
        </Table>

        <div>
          <hr />
          <AddPersonContainer store={this.props.store} />
        </div>
      </div>
    )
  }

  storeChanged = () => {
    this.setState({ people: this.props.store.getState().people })
  }

  handleDelete = (firstName: string, lastName: string) => {
    this.props.store.dispatch(deletePerson(firstName, lastName))
  }
}

export default PeopleContainer

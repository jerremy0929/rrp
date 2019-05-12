import React, { ChangeEvent } from 'react'
import { Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import PersonAPI from '../../services/personService'

const api = new PersonAPI()

class People extends React.Component {
  state = {
    people: api.getAuthors(),
    newName: '',
    newOccupation: '',
  }

  render() {
    return (
      <div>
        <h1>People</h1>
        <Table bordered={false} responsive={true} striped={true}>
          <thead>
            <tr>
              <td>
                <strong>ID</strong>
              </td>
              <td>
                <strong>Name</strong>
              </td>
              <td>
                <strong>Occupation</strong>
              </td>
              <td>&nbsp;</td>
            </tr>
          </thead>
          <tbody>
            {this.state.people.map((person, idx) => (
              <tr key={idx}>
                <td>{person.id}</td>
                <td>
                  <Link
                    to={`/people/${person.id}?name=${person.name}&occupation=${
                      person.occupation
                    }`}
                  >
                    {person.name}
                  </Link>
                  {/* <Link to={`/people/${person.id}`}>{person.name}</Link> */}
                </td>
                <td>{person.occupation}</td>
                <td>
                  <Button onClick={this.handleDelete(person.id)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div>
          <input
            onChange={this.onNameChange}
            placeholder={'Name'}
            value={this.state.newName}
          />{' '}
          <input
            onChange={this.onOccupationChange}
            placeholder={'Occupation'}
            value={this.state.newOccupation}
          />{' '}
          <Button onClick={this.onAddNewPerson}>Add</Button>
        </div>
      </div>
    )
  }

  onAddNewPerson = () => {
    if (this.state.newName === '' || this.state.newOccupation === '') {
      return
    }

    const person = {
      id: this.getId(),
      name: this.state.newName,
      occupation: this.state.newOccupation,
    }

    this.setState({
      people: this.state.people.concat(person),
      newName: '',
      newOccupation: '',
    })
  }

  onOccupationChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      newOccupation: e.target.value,
    })
  }

  onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      newName: e.target.value,
    })
  }

  handleDelete = (id: number) => () => this.onDeletePerson(id)

  onDeletePerson(id: number) {
    const people = this.state.people.filter(person => id !== person.id)
    this.setState({ people })
  }

  getId() {
    let currentId = 0

    for (let i = 0; i < this.state.people.length; i += 1) {
      if (this.state.people[i].id > currentId) {
        currentId = this.state.people[i].id
      }
    }

    return currentId + 1
  }
}

export default People

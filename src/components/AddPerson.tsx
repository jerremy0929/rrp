import React from 'react'
import {
  Button,
  FormGroup,
  FormControl,
  FormControlProps,
} from 'react-bootstrap'

const inputStyle: React.CSSProperties = {
  display: 'inline-block',
  width: 200,
  textAlign: 'left',
}

class AddPerson extends React.Component<{
  handleAddPerson: (
    firstName: string,
    lastName: string,
    occupation: string,
  ) => void
}> {
  state = {
    newFirstName: '',
    newLastName: '',
    newOccupation: '',
  }

  render() {
    return (
      <div style={{ textAlign: 'left' }}>
        <FormGroup>
          <FormControl
            style={inputStyle}
            type="text"
            placeholder="First Name"
            value={this.state.newFirstName}
            onChange={this.onFirstNameChange}
          />{' '}
          <FormControl
            style={inputStyle}
            type="text"
            placeholder="Last Name"
            value={this.state.newLastName}
            onChange={this.onLastNameChange}
          />{' '}
          <FormControl
            style={inputStyle}
            type="text"
            placeholder="Occupation"
            value={this.state.newOccupation}
            onChange={this.onOccupationChange}
          />{' '}
          <Button onClick={this.onSubmitNewPerson}>Add Person</Button>
        </FormGroup>
      </div>
    )
  }

  onFirstNameChange = (evt: React.ChangeEvent<FormControlProps>) => {
    this.setState({ newFirstName: evt.target.value })
  }

  onLastNameChange = (evt: React.ChangeEvent<FormControlProps>) => {
    this.setState({ newLastName: evt.target.value })
  }

  onOccupationChange = (evt: React.ChangeEvent<FormControlProps>) => {
    this.setState({ newOccupation: evt.target.value })
  }

  onSubmitNewPerson = () => {
    this.props.handleAddPerson(
      this.state.newFirstName,
      this.state.newLastName,
      this.state.newOccupation,
    )
    this.setState({
      newFirstName: '',
      newLastName: '',
      newOccupation: '',
    })
  }
}

export default AddPerson

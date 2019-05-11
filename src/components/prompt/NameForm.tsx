import React, { FormEvent } from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'
import { Prompt } from 'react-router-dom'

class NameForm extends React.Component<
  {},
  {
    firstName: string
    lastName: string
    valid: boolean
  }
> {
  state = {
    firstName: '',
    lastName: '',
    valid: false,
  }

  render() {
    return (
      <div>
        <Prompt
          when={!this.state.valid}
          message="Leaving this form will lose your data."
        />
        <h1>Prompt for Completion</h1>
        <Form horizontal={true} inline={true}>
          <FormControl
            type="text"
            value={this.state.firstName}
            placeholder="Enter your first name."
            onChange={this.onHandleFirstNameChange}
          />
          <FormControl
            type="text"
            value={this.state.lastName}
            placeholder="Enter your last name."
            onChange={this.onHandleLastNameChange}
          />
          <Button className="btn btn-primary" onClick={this.onSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    )
  }

  onSubmit = () => {
    const { firstName, lastName } = this.state

    if (!firstName || !lastName) {
      this.setState({ valid: false })
    } else {
      this.setState({ valid: true })
      // take some action
      alert(`Your name is ${firstName} ${lastName} `)
    }
  }

  onHandleLastNameChange = (evt: FormEvent<FormControl>) => {
    // @ts-ignore
    this.setState({ lastName: evt.target.value })
  }

  onHandleFirstNameChange = (evt: FormEvent<FormControl>) => {
    // @ts-ignore
    this.setState({ firstName: evt.target.value })
  }
}

export default NameForm

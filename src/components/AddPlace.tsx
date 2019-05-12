import React from 'react'
import {
  Button,
  FormGroup,
  FormControl,
  FormControlProps,
} from 'react-bootstrap'

const inputStyle: React.CSSProperties = {
  display: 'inline-block',
  width: 300,
  textAlign: 'left',
}

class AddPlace extends React.Component<{
  handleAddPlace: (placeName: string) => void
}> {
  state = { newPlaceName: '' }

  render() {
    return (
      <div style={{ textAlign: 'left' }}>
        <FormGroup>
          <FormControl
            style={inputStyle}
            type="text"
            placeholder="New Place Name"
            value={this.state.newPlaceName}
            onChange={this.onAddNameChange}
          />{' '}
          <Button onClick={this.onSubmitNewPlace}>Add Place</Button>
        </FormGroup>
      </div>
    )
  }

  onAddNameChange = (evt: React.ChangeEvent<FormControlProps>) => {
    this.setState({ newPlaceName: evt.target.value })
  }

  onSubmitNewPlace = () => {
    this.props.handleAddPlace(this.state.newPlaceName)
    this.setState({ newPlaceName: '' })
  }
}

export default AddPlace

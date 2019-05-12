import React from 'react'
import { Button } from 'react-bootstrap'

const Place: React.FC<{
  name: string
  handleDelete: (name: string) => void
}> = ({ name, handleDelete }) => {
  const handleDeleteClick = () => handleDelete(name)

  return (
    <tr>
      <td>{name}</td>
      <td>
        <Button onClick={handleDeleteClick}>Delete</Button>
      </td>
    </tr>
  )
}

export default Place

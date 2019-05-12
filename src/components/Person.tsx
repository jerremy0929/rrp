import React from 'react'
import { Button } from 'react-bootstrap'

const Person: React.FC<{
  first: string
  last: string
  occupation: string
  onDelete: (first: string, last: string) => void
}> = ({ first, last, occupation, onDelete }) => {
  const handleDeleteClick = () => {
    onDelete(first, last)
  }

  return (
    <tr>
      <td>{`${first} ${last}`}</td>
      <td>{occupation}</td>
      <td>
        <Button onClick={handleDeleteClick}>Delete</Button>
      </td>
    </tr>
  )
}

export default Person

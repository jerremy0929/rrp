import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

const PropViewer: React.FC<RouteComponentProps> = ({ match, location }) => {
  return <h1>{location.key}</h1>
}

export default PropViewer

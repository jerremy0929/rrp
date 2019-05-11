import React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'

const ColorSwatch = (
  props: RouteComponentProps & {
    text: string
    color: string
  },
) => {
  const style: React.CSSProperties = {
    padding: 20,
    margin: 15,
    border: '1px solid #000',
    backgroundColor: props.color,
    textAlign: 'center',
  }

  return (
    <div style={style}>
      <h2>{props.text}</h2>
      <h3>{props.match.path}</h3>
    </div>
  )
}

export default withRouter(ColorSwatch)

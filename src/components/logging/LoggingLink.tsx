import React from 'react'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'

const LoggingLink: React.FC<RouteComponentProps & { to: string }> = props => {
  const handleClick = () => {
    const path = props.to.split('/')
    const eid = path[path.length - 1]
    alert(`Click the link is logging: ${eid}`)
  }

  return (
    <Link {...props} onClick={handleClick}>
      {props.children}
    </Link>
  )
}

export default withRouter(LoggingLink)

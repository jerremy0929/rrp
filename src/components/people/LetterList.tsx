import React from 'react'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'

import { Languages } from './types'

const spanStyle: React.CSSProperties = {
  marginRight: 10,
  fontWeight: 'bold',
  fontSize: 20,
}

const LetterList: React.FC<
  Languages & {
    name: string
    occupation: string
  } & RouteComponentProps<{ letter: string }>
> = props => {
  const letters: string[] = []
  const letterLinks = props.languages.map((lang, index) => {
    const letter = lang.item.name.substring(0, 1).toUpperCase()
    if (!letters.includes(letter)) {
      letters.push(letter)

      return (
        <span style={spanStyle} key={index}>
          <Link
            to={`${props.match.url}/languages/${letter}?name=${
              props.name
            }&occupation=${props.occupation}`}
          >
            {letter}
          </Link>
        </span>
      )
    }
    return null
  })

  return <div>{letterLinks}</div>
}

export default withRouter(LetterList)

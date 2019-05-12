import React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'

import { Languages } from './types'

class LanguageList extends React.Component<
  Languages & RouteComponentProps<{ letter: string }>
> {
  state = {
    letter: this.props.match.params.letter,
  }

  componentWillReceiveProps = (
    nextProps: RouteComponentProps<{ letter: string }>,
  ) => {
    this.setState({
      letter: nextProps.match.params.letter,
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.letter}</h1>
        <ul>
          {this.getKnownLanguages().map((lang, index) => (
            <li key={index}>
              <a href={lang.id} target={'blank'}>
                {lang.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  getKnownLanguages = () => {
    const letter = this.state.letter
    const languages = this.props.languages
    const knownLanguages = []

    for (let i = 0; i < languages.length; i += 1) {
      if (languages[i].item.name.toUpperCase().startsWith(letter)) {
        knownLanguages.push(languages[i].item)
      }
    }

    return knownLanguages
  }
}

export default withRouter(LanguageList)

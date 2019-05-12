import React from 'react'

import { Languages } from '../components/people/types'
import PersonProfile from '../components/people/PersonProfile'
import dummy from '../assets/languageData.json'

class PersonProfileContainer extends React.Component<{}, Languages> {
  state = { languages: [] }

  componentDidMount = () => {
    this.setState({ languages: dummy.itemListElement })
  }

  render() {
    return (
      <section>
        <PersonProfile languages={this.state.languages} />
      </section>
    )
  }
}

export default PersonProfileContainer

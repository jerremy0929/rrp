import React from 'react'
import { withRouter, RouteComponentProps, Route } from 'react-router-dom'
import querystring from 'query-string'

import { Languages, ILanguage } from './types'
import LetterList from './LetterList'
import LanguageList from './LanguageList'

import Male_2_Circle_Orange from '../../assets/Male_2_Circle_Orange.png'

const PersonProfile: React.FC<Languages & RouteComponentProps> = props => {
  const qsValues = querystring.parse(props.location.search)
  const name = qsValues.name as string
  const occupation = qsValues.occupation as string

  const routeRender = (languages: ILanguage[]) => () => (
    <LanguageList languages={languages} />
  )

  return (
    <div>
      <h1>{name}</h1>
      <h3>{occupation}</h3>

      <img
        src={Male_2_Circle_Orange}
        alt="Male_2_Circle_Orange"
        style={{ width: 150, float: 'right' }}
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Commodo elit at
        imperdiet dui accumsan sit amet nulla. Enim facilisis gravida neque
        convallis. Mi eget mauris pharetra et ultrices neque ornare. Sagittis
        aliquam malesuada bibendum arcu. Quis enim lobortis scelerisque
        fermentum dui faucibus in ornare quam. Sed elementum tempus egestas sed
        sed risus pretium. Enim ut tellus elementum sagittis vitae et leo duis
        ut. Purus in massa tempor nec. Vel quam elementum pulvinar etiam non
        quam lacus. Volutpat consequat mauris nunc congue. Elementum integer
        enim neque volutpat ac tincidunt vitae semper quis. Fermentum posuere
        urna nec tincidunt praesent semper feugiat nibh sed. Duis convallis
        convallis tellus id interdum velit laoreet id donec. Orci eu lobortis
        elementum nibh. Amet luctus venenatis lectus magna fringilla urna
        porttitor rhoncus dolor. Eu lobortis elementum nibh tellus molestie
        nunc. Tempus quam pellentesque nec nam aliquam sem et tortor. Enim nec
        dui nunc mattis. Sapien eget mi proin sed libero enim sed.
      </p>

      <p>
        Libero justo laoreet sit amet. Cras sed felis eget velit aliquet
        sagittis id consectetur purus. Mus mauris vitae ultricies leo. Lacus sed
        viverra tellus in. Feugiat scelerisque varius morbi enim nunc faucibus
        a. Vel fringilla est ullamcorper eget. In massa tempor nec feugiat nisl
        pretium. Enim lobortis scelerisque fermentum dui faucibus in ornare
        quam. Vitae nunc sed velit dignissim sodales ut eu sem integer. Turpis
        in eu mi bibendum neque egestas congue quisque. Facilisis gravida neque
        convallis a. Quam elementum pulvinar etiam non quam lacus suspendisse
        faucibus interdum. Lacus luctus accumsan tortor posuere.
      </p>

      <section>
        <h3>Programming Languages</h3>
        <LetterList
          languages={props.languages}
          name={name}
          occupation={occupation}
        />
        <Route
          path={`${props.match.url}/languages/:letter`}
          render={routeRender(props.languages)}
        />
      </section>
    </div>
  )
}

export default withRouter(PersonProfile)

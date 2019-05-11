import React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'

const Lorem = ({ match }: RouteComponentProps<{ eid: string }>) => {
  return (
    <div>
      <h3>{match.params.eid}</h3>
      <p>
        <strong>Request path:</strong>
        {match.path}
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi quasi
        vero corrupti eos tempora veritatis, dicta tenetur similique, quo ipsam
        repudiandae molestias magni rerum laboriosam? Reiciendis velit qui et
        assumenda?
      </p>
      <p>
        Beatae ea, ipsam velit impedit laudantium exercitationem et dolores unde
        inventore mollitia doloremque quo optio perspiciatis accusantium
        possimus, laboriosam asperiores nisi voluptatibus ad voluptas dolorum
        nihil? Dolore explicabo ratione aspernatur illo!
      </p>
      <p>
        <strong>Time Stamp:</strong>
        {Date.now()}
      </p>
    </div>
  )
}

export default withRouter(Lorem)

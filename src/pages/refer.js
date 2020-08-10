import React from 'react'
import { Router, Location } from '@reach/router'

import Refer from '../components/refer/refer';

const ReferPage = props => (
  <>
    <Location>
      {({ location }) => (
        <Router location={location}>
          <Refer path="refer/:referID"/>
        </Router>
      )}
    </Location>
  </>
)

export default ReferPage;
import React from 'react'
import Layout from '../templates/homepage'
import { Router, Location } from '@reach/router'

import Refer from '../components/refer/refer';

const ReferPage = props => (
  <Layout>
    <>
      <Refer/>
      <Location>
        {({ location }) => (
          <Router location={location}>
            <Refer path="refer/:referID"/>
          </Router>
        )}
      </Location>
    </>
  </Layout>
)

export default ReferPage;
import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@kadira/storybook'

import Navbar from './'


storiesOf('Navbar', module)
  .add('default', () => (
    <Navbar />
  ))

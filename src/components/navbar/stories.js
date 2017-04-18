import React from 'react'
import { storiesOf } from '@kadira/storybook'

import Navbar from './'


storiesOf('Navbar', module)
  .add('default', () => (
    <Navbar />
  ))

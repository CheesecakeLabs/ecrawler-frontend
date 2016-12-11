import React from 'react'
import { storiesOf } from '@kadira/storybook'

import EntityCard from './'


storiesOf('EntityCard', module)
  .add('default', () => (
    <EntityCard
      name="Cheesecake Labs"
      date="2016-12-11T12:00:00Z"
    />
  ))

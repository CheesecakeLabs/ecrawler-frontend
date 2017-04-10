import React from 'react'
import { storiesOf } from '@kadira/storybook'

import FilterCard from './'


storiesOf('FilterCard', module)
  .add('default', () => (
    <FilterCard
      name="Cheesecake Labs"
      date="2016-12-11T12:00:00Z"
    />
  ))

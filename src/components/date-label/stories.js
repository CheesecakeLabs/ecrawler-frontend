import React from 'react'
import { storiesOf } from '@kadira/storybook'
import moment from 'moment'

import DateLabel from './'


storiesOf('DateLabel', module)
  .add('just now relative', () => {
    const now = moment().toJSON()
    return <DateLabel date={now} />
  })
  .add('five days ago relative', () => {
    const fiveDaysAgo = moment().subtract(5, 'days').toJSON()
    return <DateLabel date={fiveDaysAgo} />
  })
  .add('three months ago relative', () => {
    const thirtyMonthsAgo = moment().subtract(90, 'days').toJSON()
    return <DateLabel date={thirtyMonthsAgo} />
  })
  .add('just now', () => {
    const now = moment().toJSON()
    return <DateLabel date={now} />
  })
  .add('five days ago', () => {
    const fiveDaysAgo = moment().subtract(5, 'days').toJSON()
    return <DateLabel date={fiveDaysAgo} />
  })
  .add('three months ago', () => {
    const thirtyMonthsAgo = moment().subtract(90, 'days').toJSON()
    return <DateLabel date={thirtyMonthsAgo} />
  })

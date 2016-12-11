import React from 'react'
import { Route } from 'react-router'

import App from './views/app'
import FiltersGrid from './views/filters-grid'
import NotFound from './views/not-found'


const routes = (
  <Route component={App}>
    <Route path="/" component={FiltersGrid} />
    <Route path="*" component={NotFound} />
  </Route>
)


export default routes

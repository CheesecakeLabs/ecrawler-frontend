import { configure } from '@kadira/storybook'

function loadStories() {
  /* eslint-disable global-require */
  require('../stories/index.js')
  /* eslint-enable global-require */

  // You can require as many stories as you need.
}

configure(loadStories, module)

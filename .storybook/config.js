import { configure } from '@kadira/storybook'

const requireAll = (requireContext) => (
  requireContext.keys().map(requireContext)
)

const loadStories = () => (
  requireAll(require.context('../src', true, /stories\.js/))
)

configure(loadStories, module)

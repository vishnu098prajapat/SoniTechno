import { itSolutions } from './itSolutions.js'
import { software } from './software.js'
import { apis } from './apis.js'

export const allPages = { ...itSolutions, ...software, ...apis }

export const sectionBase = {
  'it-solutions': '/it-solutions',
  software: '/software',
  api: '/api',
}

export function pagePath(slug) {
  const page = allPages[slug]
  if (!page) return '/'
  return `${sectionBase[page.section]}/${slug}`
}

export { itSolutions, software, apis }

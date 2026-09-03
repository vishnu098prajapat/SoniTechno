import { useEffect } from 'react'

const SUFFIX = 'SoniTechno — a complete IT solution'

/** Sets the browser tab title and meta description for a route. No visual effect. */
export default function useSeo(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | SoniTechno` : SUFFIX

    if (description) {
      let tag = document.querySelector('meta[name="description"]')
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', 'description')
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', description)
    }
  }, [title, description])
}

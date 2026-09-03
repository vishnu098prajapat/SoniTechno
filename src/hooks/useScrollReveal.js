import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Scroll choreography.
 *
 * Every class here is added by JS at runtime — nothing is hidden in the markup,
 * so if JS never runs the page renders exactly as before.
 *
 *   section        -> fades up with a soft blur clearing
 *   grid children  -> staggered rise + scale settle
 *   aside          -> slides in from the right
 *   headings       -> lead the section by a beat
 */
export default function useScrollReveal() {
  const { pathname } = useLocation()

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced || !('IntersectionObserver' in window)) return

    let observer
    const timer = setTimeout(() => {
      const targets = []
      const mark = (el, cls, delay = 0) => {
        if (!el || el.dataset.revealed) return
        el.dataset.revealed = '1'
        el.classList.add('rv', cls)
        if (delay) el.style.transitionDelay = `${delay}ms`
        targets.push(el)
      }

      document.querySelectorAll('main section').forEach((section) => {
        mark(section, 'rv-up')

        // headings lead
        const heading = section.querySelector('h2')
        if (heading && !heading.closest('[class*="grid-cols"]')) mark(heading, 'rv-up', 90)

        // staggered grid items
        const grid = [...section.querySelectorAll('[class*="grid-cols"]')].find(
          (g) => g.children.length >= 2
        )
        if (grid) {
          ;[...grid.children].forEach((child, i) => mark(child, 'rv-pop', 90 + Math.min(i, 8) * 90))
        }

        // sidebars glide in
        section.querySelectorAll('aside').forEach((el) => mark(el, 'rv-right', 120))
      })

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('rv-in')
              observer.unobserve(e.target)
            }
          })
        },
        { threshold: 0.06, rootMargin: '0px 0px -60px 0px' }
      )
      targets.forEach((t) => observer.observe(t))
    }, 60)

    return () => {
      clearTimeout(timer)
      if (observer) observer.disconnect()
      document.querySelectorAll('.rv').forEach((el) => {
        el.classList.remove('rv', 'rv-up', 'rv-pop', 'rv-right', 'rv-in')
        el.style.transitionDelay = ''
        delete el.dataset.revealed
      })
    }
  }, [pathname])
}

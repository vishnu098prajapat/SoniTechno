import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * A soft brand-red glow that follows the cursor — ONLY on clickable cards
 * inside a grid (service cards, blog cards, catalogue tiles).
 *
 * Deliberately NOT applied to:
 *   - article / body text containers
 *   - sidebar boxes (Categories, Recent Posts, Popular Tags)
 *   - forms, lists, anything holding a heading or long copy
 *   - anything that already paints its own gradient background
 *
 * No 3D tilt — text stays perfectly flat and readable.
 */
export default function useCardSpotlight() {
  const { pathname } = useLocation()

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduced) return

    let cards = []

    const onMove = (e) => {
      const el = e.currentTarget
      const r = el.getBoundingClientRect()
      el.style.setProperty('--mx', `${e.clientX - r.left}px`)
      el.style.setProperty('--my', `${e.clientY - r.top}px`)
    }
    const onLeave = (e) => e.currentTarget.style.setProperty('--my', '-200%')

    const timer = setTimeout(() => {
      // only direct children of a grid that are actual links, plus explicit .card
      const candidates = new Set([
        ...document.querySelectorAll('main [class*="grid-cols"] > a'),
        ...document.querySelectorAll('main a.card'),
        // non-link tiles that are clearly cards: a grid child with its own heading
        ...[...document.querySelectorAll('main [class*="grid-cols"] > div')].filter((d) =>
          d.querySelector('h3, h4')
        ),
      ])

      cards = [...candidates].filter((el) => {
        if (el.closest('aside')) return false                  // never sidebars
        if (el.querySelector('h2, ul, ol, form, textarea')) return false // never text/content blocks
        if (el.querySelectorAll('p').length > 2) return false   // never long copy

        const bg = getComputedStyle(el).backgroundImage
        if (bg && bg !== 'none') return false                   // never overwrite a gradient

        const r = el.getBoundingClientRect()
        return r.width > 180 && r.width < 620 && r.height > 120 && r.height < 560
      })

      cards.forEach((el) => {
        // links lift; static tiles only glow, so seamless grids stay seamless
        el.classList.add('spot')
        if (el.tagName !== 'A') el.classList.add('spot-flat')
        el.addEventListener('mousemove', onMove)
        el.addEventListener('mouseleave', onLeave)
      })
    }, 140)

    return () => {
      clearTimeout(timer)
      cards.forEach((el) => {
        el.classList.remove('spot', 'spot-flat')
        el.removeEventListener('mousemove', onMove)
        el.removeEventListener('mouseleave', onLeave)
        el.style.removeProperty('--mx')
        el.style.removeProperty('--my')
      })
    }
  }, [pathname])
}

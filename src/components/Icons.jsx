const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const wrap = (children) =>
  function Icon({ className = 'h-6 w-6', ...rest }) {
    return (
      <svg viewBox="0 0 24 24" className={className} {...base} {...rest} aria-hidden="true">
        {children}
      </svg>
    )
  }

export const IconPhone = wrap(
  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.4 1.9.6 2.9.8a2 2 0 0 1 1.7 2Z" />
)
export const IconMail = wrap(
  <>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 6-10 7L2 6" />
  </>
)
export const IconPin = wrap(
  <>
    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </>
)
export const IconChevron = wrap(<path d="m6 9 6 6 6-6" />)
export const IconArrow = wrap(<path d="M5 12h14m-6-6 6 6-6 6" />)
export const IconCheck = wrap(<path d="m5 13 4 4L19 7" />)
export const IconMenu = wrap(<path d="M4 7h16M4 12h16M4 17h16" />)
export const IconClose = wrap(<path d="M6 6l12 12M18 6 6 18" />)
export const IconMobile = wrap(
  <>
    <rect x="6" y="2" width="12" height="20" rx="2.5" />
    <path d="M11 18h2" />
  </>
)
export const IconCode = wrap(<path d="m8 6-6 6 6 6m8-12 6 6-6 6M14 4l-4 16" />)
export const IconCart = wrap(
  <>
    <circle cx="9" cy="20" r="1.5" />
    <circle cx="18" cy="20" r="1.5" />
    <path d="M2 3h3l2.4 12.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L21 7H6" />
  </>
)
export const IconCard = wrap(
  <>
    <rect x="2" y="5" width="20" height="14" rx="2.5" />
    <path d="M2 10h20M6 15h4" />
  </>
)
export const IconShield = wrap(
  <>
    <path d="M12 22s8-3.5 8-10V5l-8-3-8 3v7c0 6.5 8 10 8 10Z" />
    <path d="m9 12 2 2 4-4" />
  </>
)
export const IconPlane = wrap(<path d="M17.8 19.2 16 11l4.2-4.2a2 2 0 0 0-2.8-2.8L13.2 8 5 6.2 3 8.2l6.6 3.6-2.2 2.2H4.6L3 15.6l4.4 1 1 4.4 1.6-1.6v-2.8l2.2-2.2 3.6 6.6 2-2Z" />)
export const IconBank = wrap(
  <>
    <path d="M3 10h18M5 10v8m4-8v8m6-8v8m4-8v8M2 21h20M12 3 3 8h18l-9-5Z" />
  </>
)
export const IconLayers = wrap(<path d="m12 3 9 5-9 5-9-5 9-5Zm9 9-9 5-9-5m18 4-9 5-9-5" />)
export const IconSpark = wrap(<path d="M12 3v4m0 10v4M3 12h4m10 0h4M5.6 5.6l2.8 2.8m7.2 7.2 2.8 2.8m0-12.8-2.8 2.8m-7.2 7.2-2.8 2.8" />)
export const IconGlobe = wrap(
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.7 3.8 6 3.8 9S14.5 18.3 12 21c-2.5-2.7-3.8-6-3.8-9S9.5 5.7 12 3Z" />
  </>
)
export const IconChat = wrap(<path d="M21 12a8 8 0 0 1-11.6 7.2L4 21l1.8-5.4A8 8 0 1 1 21 12Z" />)

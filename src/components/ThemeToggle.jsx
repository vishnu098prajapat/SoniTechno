import { useTheme } from '../hooks/useTheme.jsx'

/** Sun/moon icon-swap switch. Animates smoothly and respects the current theme everywhere it's placed. */
export default function ThemeToggle({ className = '' }) {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`group relative grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-full border transition-all duration-300 ${
        isDark
          ? 'border-brand-500/30 bg-white/5 hover:border-brand-500 hover:bg-brand-500/10 hover:shadow-[0_0_15px_rgba(230,46,46,0.2)]'
          : 'border-ink-200 text-ink-950 hover:border-brand-500 hover:text-brand-500 hover:shadow-[0_4px_12px_rgba(230,46,46,0.1)]'
      } ${className}`}
    >
      {/* Sun icon */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={`absolute h-[19px] w-[19px] text-brand-500 transition-all duration-500 ${
          isDark ? '-rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
        }`}
      >
        <circle cx="12" cy="12" r="4.2" fill="currentColor" />
        <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <path d="M12 2.5v2.4M12 19.1v2.4M4.2 4.2l1.7 1.7M18.1 18.1l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.2 19.8l1.7-1.7M18.1 5.9l1.7-1.7" />
        </g>
      </svg>

      {/* Moon icon */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={`absolute h-[18px] w-[18px] text-brand-400 transition-all duration-500 ${
          isDark ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'
        }`}
      >
        <path
          d="M20.5 14.5a8.5 8.5 0 1 1-9-11 7 7 0 0 0 9 11Z"
          fill="currentColor"
        />
      </svg>
    </button>
  )
}

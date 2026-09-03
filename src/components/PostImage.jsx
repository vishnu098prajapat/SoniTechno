import { useState } from 'react'

/** Post image with a branded gradient fallback if the file is missing. */
export default function PostImage({ src, alt, className = '' }) {
  const [failed, setFailed] = useState(false)

  if (failed || !src) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-slate-100 via-white to-brand-500/10 ${className}`}
      >
        <span className="font-serif text-2xl italic text-brand-500/40">SoniTechno</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  )
}

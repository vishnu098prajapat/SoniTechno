/**
 * Recreated from the SoniTechno logo:
 * a bold black "S" mark with a red slash, "Soni" in red + "Techno" in black,
 * and the tagline "a complete IT solution".
 */
export default function Logo({ light = false, compact = false }) {
  return (
    <div className="flex items-center">
      <img 
        src="/images/logo.png" 
        alt="SoniTechno - A complete IT solution" 
        className={`w-auto object-contain ${compact ? 'h-9' : 'h-10 sm:h-12'}`}
      />
    </div>
  )
}

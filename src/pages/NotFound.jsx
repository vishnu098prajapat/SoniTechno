import { Link } from 'react-router-dom'
import { IconArrow } from '../components/Icons.jsx'
import useSeo from '../hooks/useSeo.js'

export default function NotFound() {
  useSeo('Page not found')
  return (
    <section className="grain relative flex min-h-[70vh] items-center overflow-hidden bg-ink-950 text-white">
      <div className="pointer-events-none absolute inset-0 grid-lines" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-600/25 blur-[110px]" />
      <div className="container-x relative text-center">
        <p className="font-serif text-[7rem] italic leading-none text-brand-500 sm:text-[10rem]">404</p>
        <h1 className="mt-4 display text-3xl text-white sm:text-4xl">This page could not be found</h1>
        <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-white/50">
          The page you are looking for may have moved. Head back to the homepage or get in touch with our team.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn-primary">
            Back to Home <IconArrow className="h-4 w-4" />
          </Link>
          <Link to="/contact" className="btn-light">Contact Us</Link>
        </div>
      </div>
    </section>
  )
}

import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import ScrollToTop from './ScrollToTop.jsx'
import WhatsAppButton from './WhatsAppButton.jsx'
import PageLoader from './PageLoader.jsx'
import useScrollReveal from '../hooks/useScrollReveal.js'
import useCardSpotlight from '../hooks/useCardSpotlight.js'
import ScrollProgress from './ScrollProgress.jsx'
import ScrollToTopButton from './ScrollToTopButton.jsx'

export default function Layout() {
  useScrollReveal()
  useCardSpotlight()

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 font-sans text-slate-600 antialiased selection:bg-brand-500/30 selection:text-brand-900">
      <PageLoader />
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 pt-[74px]">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTopButton />
    </div>
  )
}

import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout.jsx'

const Home = lazy(() => import('./pages/Home.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const Blog = lazy(() => import('./pages/Blog.jsx'))
const BlogPost = lazy(() => import('./pages/BlogPost.jsx'))
const Privacy = lazy(() => import('./pages/Privacy.jsx'))
const Reviews = lazy(() => import('./pages/Reviews.jsx'))
const ServicePage = lazy(() => import('./pages/ServicePage.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))
const Demo = lazy(() => import('./pages/Demo.jsx'))

export default function App() {
  return (
    <Suspense fallback={
      <div className="h-screen w-full flex flex-col items-center justify-center gap-4 bg-white dark:bg-[#0a0a0c]">
        <div className="w-10 h-10 border-4 border-brand-500/20 border-t-brand-500 rounded-full animate-spin"></div>
        <p className="text-sm font-semibold text-slate-400 animate-pulse">Loading...</p>
      </div>
    }>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="demo" element={<Demo />} />
          <Route path="it-solutions/:slug" element={<ServicePage />} />
          <Route path="software/:slug" element={<ServicePage />} />
          <Route path="api/:slug" element={<ServicePage />} />
          <Route path="services" element={<Navigate to="/it-solutions/website-development" replace />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

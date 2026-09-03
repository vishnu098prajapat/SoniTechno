import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import { site } from '../data/site.js'
import { IconPhone, IconMail, IconPin } from '../components/Icons.jsx'
import useSeo from '../hooks/useSeo.js'

export default function Contact() {
  useSeo('Contact', 'Contact SoniTechno IT Solutions — Khairthal, Rajasthan. Call (+91) 9351051856 or email sales@sonitechno.com.')
  const [sent, setSent] = useState(false)

  return (
    <>
      <PageHero
        kicker="Contact"
        crumbs={['Contact']}
        compact={true}
      />

      <section className="bg-slate-50 py-24 w-full px-6 lg:px-12">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col lg:flex-row">
          
          {/* LEFT PANEL - Brand Colored */}
          <div className="lg:w-[40%] bg-brand-500 p-10 lg:p-14 text-white relative overflow-hidden">
            {/* Decorative Circles matching the image */}
            <div className="absolute -bottom-24 -right-16 w-[22rem] h-[22rem] bg-brand-600 rounded-full pointer-events-none" />
            <div className="absolute -bottom-10 -right-4 w-[18rem] h-[18rem] bg-brand-400/40 rounded-full pointer-events-none" />

            <div className="relative z-10">
              <h3 className="text-2xl lg:text-[1.75rem] font-bold mb-4">Contact Information</h3>
              <p className="text-white/80 text-[15px] leading-relaxed mb-12 max-w-sm">
                Fill up the form and our team will get back to you within 24 hours.
              </p>

              <ul className="space-y-10">
                <li className="flex gap-5 items-start">
                  <IconPhone className="w-5 h-5 shrink-0 mt-0.5" />
                  <div className="text-[15px] font-medium tracking-wide">
                    {site.phones.map(phone => (
                       <p key={phone} className="mb-1 last:mb-0">(+91) {phone}</p>
                    ))}
                  </div>
                </li>
                
                <li className="flex gap-5 items-center">
                  <IconMail className="w-5 h-5 shrink-0" />
                  <a href={`mailto:${site.email}`} className="text-[15px] font-medium tracking-wide hover:text-white/80 transition-colors break-all">
                    {site.email}
                  </a>
                </li>
                
                <li className="flex gap-5 items-center">
                  <IconPin className="w-5 h-5 shrink-0" />
                  <p className="text-[15px] font-medium tracking-wide">
                    {site.address}
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT PANEL - Form */}
          <div className="lg:w-[60%] p-10 lg:p-16">
            <form
              className="grid gap-y-12 gap-x-8 sm:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault()
                const fd = new FormData(e.target)
                const name = fd.get('name')
                const email = fd.get('email')
                const subject = fd.get('subject')
                const message = fd.get('message')
                
                const waNumber = site.phones[0].replace(/\D/g, '')
                const waMessage = encodeURIComponent(
                  `*New Contact Request*\n\n*Name:* ${name}\n*Email:* ${email}\n*Subject:* ${subject}\n\n*Message:*\n${message}`
                )
                
                window.open(`https://wa.me/${waNumber}?text=${waMessage}`, '_blank')
                setSent(true)
              }}
            >
              <Field label="Your Name" name="name" placeholder="Full name" required />
              <Field label="Your Email" name="email" type="email" placeholder="Email address" required />
              
              <div className="sm:col-span-2">
                 <Field label="Your Subject" name="subject" placeholder="Subject" required />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-brand-500 mb-2">Message</label>
                <textarea
                  name="message"
                  rows={2}
                  required
                  placeholder="Write here your message"
                  className="w-full resize-none border-b-2 border-slate-200 bg-transparent pb-3 text-[15px] text-ink-950 outline-none transition placeholder:text-slate-300 focus:border-brand-500"
                />
              </div>

              <div className="sm:col-span-2 pt-2">
                <button 
                  type="submit" 
                  className="bg-brand-500 text-white hover:bg-brand-600 transition-colors rounded-md px-8 py-3.5 text-[15px] font-bold shadow-md shadow-brand-500/20"
                >
                  Send Message
                </button>
                {sent && (
                  <p className="mt-4 text-sm font-semibold text-brand-600">
                    Thanks! Your message has been sent.
                  </p>
                )}
              </div>
            </form>
          </div>

        </div>
      </section>
    </>
  )
}

function Field({ label, ...props }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-slate-400 mb-2">{label}</label>
      <input
        {...props}
        className="w-full border-b-2 border-slate-200 bg-transparent pb-3 text-[15px] text-ink-950 font-medium outline-none transition placeholder:text-ink-950 focus:border-brand-500"
      />
    </div>
  )
}

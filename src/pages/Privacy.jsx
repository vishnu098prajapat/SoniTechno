import PageHero from '../components/PageHero.jsx'
import { site } from '../data/site.js'
import useSeo from '../hooks/useSeo.js'

const sections = [
  {
    heading: 'Information We Collect',
    body: [
      'When you contact SoniTechno IT Solutions through our website, request a quote or subscribe to our updates, we collect the information you choose to give us — typically your name, email address, phone number and a description of your requirement.',
      'We also collect standard technical information such as browser type and pages visited, which helps us understand how the site is used.',
    ],
  },
  {
    heading: 'How We Use Your Information',
    body: [
      'Your information is used to respond to your enquiry, prepare proposals, deliver the services you have requested and, where you have opted in, send you news and updates about our products.',
      'We do not sell your personal information to third parties.',
    ],
  },
  {
    heading: 'Domain Registration Privacy',
    body: [
      'Domain registration typically exposes personal information publicly on the internet, including your full name, address, contact number and email. Where you register a domain through us, we offer a privacy feature that replaces this personal data with generic company details instead.',
    ],
  },
  {
    heading: 'Data Security',
    body: [
      'We apply reasonable technical and organisational measures — including MAC and IP based access controls, captcha and OTP verification on sensitive operations — to protect the data held in the platforms we operate.',
    ],
  },
  {
    heading: 'Cookies',
    body: [
      'Our website uses cookies to remember your preferences and to measure traffic. You can disable cookies in your browser settings, though some parts of the site may not work as intended.',
    ],
  },
  {
    heading: 'Contact Us',
    body: [
      `If you have any questions about this policy or about the data we hold, write to us at ${site.email} or call (+91) ${site.phones.join(', ')}.`,
    ],
  },
]

export default function Privacy() {
  useSeo('Privacy Policy', 'How SoniTechno IT Solutions collects, uses and protects your information.')
  return (
    <>
      <PageHero
        kicker="Legal"
        title="Privacy Policy"
        lead="How SoniTechno IT Solutions collects, uses and protects the information you share with us."
        crumbs={['Privacy Policy']}
      />
      <section className="bg-white py-14 sm:py-24">
        <div className="container-x max-w-3xl">
          {sections.map((s, i) => (
            <div key={s.heading} className="border-t border-ink-100 py-10 last:border-b">
              <div className="flex gap-6">
                <span className="font-serif text-lg italic text-ink-200">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h2 className="h3 text-[20px]">{s.heading}</h2>
                  <div className="prose-block mt-4">
                    {s.body.map((p, n) => (
                      <p key={n}>{p}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <p className="mt-10 text-[13px] text-ink-300">{site.copyright}</p>
        </div>
      </section>
    </>
  )
}

export const site = {
  name: 'SoniTechno',
  fullName: 'SoniTechno IT Solutions',
  tagline: 'IT Services To Develop your Business!',
  phones: ['+91 9351051856', '8890977983'],
  email: 'sales@sonitechno.com',
  address: 'Ramesh chand, ward no 11, near Gayatri Mandir, Khairthal, Rajasthan 301404',
  officeLabel: 'India Office',
  officeCity: 'Alwar (Raj.)',
  demoUrl: 'http://demo.sonitechno.com/admin',
  copyright: `© ${new Date().getFullYear()} SoniTechno IT Solutions. All rights reserved.`,
}

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Demo', to: '/demo' },
  {
    label: 'IT Solutions',
    children: [
      { label: 'Android App Development', to: '/it-solutions/android-app-development' },
      { label: 'Ecommerce Shopping Portal', to: '/it-solutions/ecommerce-shopping-portal' },
      { label: 'Banner Design', to: '/it-solutions/banner-design' },
      { label: 'Bulk SMS', to: '/it-solutions/bulk-sms' },
      { label: 'Logo Design', to: '/it-solutions/logo-design' },
      { label: 'Payment Gateway Solution', to: '/it-solutions/payment-gateway' },
      { label: 'Website Design', to: '/it-solutions/website-design' },
      { label: 'Website Design & Development', to: '/it-solutions/website-development' },
      { label: 'Web Domain & Hosting', to: '/it-solutions/web-domain-hosting' },
    ],
  },
  {
    label: 'Software',
    children: [
      { label: 'Mobile Recharge Software', to: '/software/mobile-recharge-software' },
      { label: 'Money Transfer Software', to: '/software/money-transfer-software' },
      { label: 'Flight Booking', to: '/software/flight-booking' },
      { label: 'Hotel Booking', to: '/software/hotel-booking' },
      { label: 'Bus Booking', to: '/software/bus-booking' },
      { label: 'Loan Software', to: '/software/loan-management-software' },
      { label: 'MLM Software', to: '/software/mlm-software' },
      { label: 'AEPS', to: '/software/aeps' },
      { label: 'BBPS', to: '/software/bbps' },
      { label: 'Pan Card Service', to: '/software/pan-card-service' },
      { label: 'mPOS Machine Service', to: '/software/mpos-machine' },
    ],
  },
  {
    label: 'API Solution',
    children: [
      { label: 'Recharge API', to: '/api/recharge-api' },
      { label: 'Utility API', to: '/api/utility-api' },
      { label: 'AEPS API', to: '/api/aeps-api' },
      { label: 'Money Transfer API', to: '/api/money-transfer-api' },
      { label: 'Pan Card API', to: '/api/pan-card-api' },
    ],
  },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

export const footerLinks = {
  'What We Do': [
    { label: 'UI & UX Design', to: '/it-solutions/website-design' },
    { label: 'Web Development', to: '/it-solutions/website-development' },
    { label: 'App Development', to: '/it-solutions/android-app-development' },
    { label: 'Shopping Portal', to: '/it-solutions/ecommerce-shopping-portal' },
    { label: 'Domain & Hosting', to: '/it-solutions/web-domain-hosting' },
  ],
  'Our Products': [
    { label: 'Recharge Software', to: '/software/mobile-recharge-software' },
    { label: 'MLM Software', to: '/software/mlm-software' },
    { label: 'mPOS Machine', to: '/software/mpos-machine' },
  ],
  'API Solution': [
    { label: 'Recharge API', to: '/api/recharge-api' },
    { label: 'Utility API', to: '/api/utility-api' },
    { label: 'AEPS API', to: '/api/aeps-api' },
    { label: 'Money Transfer Software', to: '/api/money-transfer-api' },
    { label: 'Pan Card API', to: '/api/pan-card-api' },
  ],
}

export const recentSearches = ['Web Designing', 'Web Development', 'App Development', 'Digital Marketing']

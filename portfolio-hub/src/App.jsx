import Navbar from '../../shared/components/Navbar';
import Footer from '../../shared/components/Footer';

const landingPages = [
  {
    title: 'Agency Software',
    description: 'Landing page for a software development agency with dark mode and tech gradients.',
    path: 'landing-pages/agency-software/index.html',
    color: 'from-purple-500 to-blue-500'
  },
  {
    title: 'SaaS CRM',
    description: 'Clean SaaS product page with dashboard mockup and pricing.',
    path: 'landing-pages/saas-crm/index.html',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Restaurant',
    description: 'Elegant restaurant landing page with warm tones.',
    path: 'landing-pages/restaurant/index.html',
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'Clothing Store',
    description: 'Minimalist fashion e-commerce landing page.',
    path: 'landing-pages/clothing-store/index.html',
    color: 'from-pink-500 to-rose-500'
  },
  {
    title: 'Education Institution',
    description: 'Professional landing page for educational institutions.',
    path: 'landing-pages/education-institution/index.html',
    color: 'from-green-500 to-teal-500'
  }
];

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' }
];

const footerLinks = [
  {
    title: 'Projects',
    items: landingPages.map(p => ({
      label: p.title,
      href: p.path
    }))
  },
  {
    title: 'Connect',
    items: [
      { label: 'GitHub', href: 'https://github.com' },
      { label: 'LinkedIn', href: 'https://linkedin.com' }
    ]
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar links={navLinks} ctaText="Contact" />
      
      <main>
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
              Landing Pages Portfolio
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
              A collection of landing pages built with React and Tailwind CSS.
              Each project demonstrates different styles and use cases.
            </p>
          </div>
        </section>
        
        <section id="projects" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {landingPages.map((page, i) => (
                <a
                  key={i}
                  href={page.path}
                  className="group block rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all"
                >
                  <div className={`h-32 rounded-lg bg-gradient-to-br ${page.color} mb-4`} />
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                    {page.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">{page.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
        
        <section id="about" className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">About This Portfolio</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Built with React, Vite, and Tailwind CSS. Each landing page is a standalone
              project showcasing different design approaches and industries.
            </p>
          </div>
        </section>
      </main>
      
      <Footer brand="Portfolio" links={footerLinks} />
    </div>
  );
}

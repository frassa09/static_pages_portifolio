import Navbar from '../../../shared/components/Navbar';
import CTA from '../../../shared/components/CTA';
import Footer from '../../../shared/components/Footer';
import AnimatedSection from '../../../shared/components/AnimatedSection';
import LanguageToggle from '../../../shared/components/LanguageToggle';
import ScrollLink from '../../../shared/components/ScrollLink';
import useLanguage from '../../../shared/hooks/useLanguage';
import translations from '../../../shared/i18n/translations';

const services = [
  {
    icon: '🚀',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop'
  },
  {
    icon: '📱',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop'
  },
  {
    icon: '☁️',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop'
  },
  {
    icon: '🔒',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop'
  }
];

const projects = [
  { image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop', metric: '2M+ daily txns' },
  { image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop', metric: '30% cost reduction' },
  { image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop', metric: '99.99% uptime' }
];

const clients = ['Stripe', 'Vercel', 'Linear', 'Notion', 'Figma', 'Supabase'];

const testimonials = [
  { avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' },
  { avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face' },
  { avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face' }
];

const footerLinks = [
  { title: 'Services', items: [{ label: 'Web Applications', href: '#services' }, { label: 'Mobile Apps', href: '#services' }, { label: 'Cloud & DevOps', href: '#services' }] },
  { title: 'Company', items: [{ label: 'About', href: '#' }, { label: 'Blog', href: '#' }, { label: 'Careers', href: '#' }] }
];

export default function App() {
  const { t, lang, toggleLanguage } = useLanguage(translations.agency);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar
        links={[
          { label: t('nav.services'), href: '#services' },
          { label: t('nav.work'), href: '#work' },
          { label: t('nav.process'), href: '#process' },
          { label: t('nav.contact'), href: '#contact' }
        ]}
        ctaText={t('nav.cta')}
        rightExtra={<LanguageToggle lang={lang} toggleLanguage={toggleLanguage} light />}
      />

      <main>
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&h=1080&fit=crop" alt="" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-gray-950/90 to-gray-950" />
          </div>
          <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
            <AnimatedSection animation="fade-up">
              <div className="inline-block mb-6 px-4 py-2 rounded-full bg-gray-800/60 border border-gray-700/50 text-sm text-gray-300">{t('badge')}</div>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={100}>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                {t('title1')}<br /><span className="text-gray-400">{t('title2')}</span>
              </h1>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={200}>
              <p className="mt-8 text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">{t('subtitle')}</p>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={300}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <ScrollLink to="#contact" className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-105 active:scale-95">{t('cta1')}</ScrollLink>
                <ScrollLink to="#work" className="px-8 py-4 border border-gray-700 rounded-full font-semibold text-gray-300 hover:bg-gray-800 transition-all hover:scale-105 active:scale-95">{t('cta2')}</ScrollLink>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-12 border-y border-gray-800/50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-center text-sm text-gray-500 mb-6">{t('trusted')}</p>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
              {clients.map((client, i) => (
                <AnimatedSection key={i} animation="fade-up" delay={i * 80}>
                  <span className="text-xl font-semibold text-gray-600 tracking-tight">{client}</span>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <AnimatedSection animation="fade-up">
              <div className="max-w-2xl mb-16">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">{t('servicesBadge')}</p>
                <h2 className="text-4xl font-bold">{t('servicesTitle')}</h2>
              </div>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, i) => (
                <AnimatedSection key={i} animation="fade-up" delay={i * 100}>
                  <div className="group rounded-2xl overflow-hidden border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-gray-900/50">
                    <div className="img-zoom h-48"><img src={service.image} alt="" loading="lazy" /></div>
                    <div className="p-8">
                      <div className="text-3xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-semibold mb-3">{t(`services.${i}.title`)}</h3>
                      <p className="text-gray-400 leading-relaxed">{t(`services.${i}.desc`)}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="py-24 bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <AnimatedSection animation="fade-up">
              <div className="max-w-2xl mb-16">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">{t('workBadge')}</p>
                <h2 className="text-4xl font-bold">{t('workTitle')}</h2>
              </div>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project, i) => (
                <AnimatedSection key={i} animation="fade-up" delay={i * 150}>
                  <div className="group rounded-2xl overflow-hidden border border-gray-800/50 hover:border-gray-700/50 transition-all duration-500 hover:-translate-y-2">
                    <div className="relative h-52 overflow-hidden">
                      <img src={project.image} alt="" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent" />
                      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm text-xs font-medium text-white">{project.metric}</div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold">{t(`work.projects.${i}.title`)}</h3>
                      <p className="mt-2 text-gray-400 text-sm leading-relaxed">{t(`work.projects.${i}.desc`)}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <AnimatedSection animation="fade-up">
              <div className="max-w-2xl mb-16">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">{t('processBadge')}</p>
                <h2 className="text-4xl font-bold">{t('processTitle')}</h2>
              </div>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {['01', '02', '03', '04'].map((step, i) => (
                <AnimatedSection key={i} animation="fade-up" delay={i * 120}>
                  <div>
                    <div className="text-6xl font-bold text-gray-800/80 mb-4">{step}</div>
                    <h3 className="text-lg font-semibold mb-2">{t(`process.${i}.title`)}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{t(`process.${i}.desc`)}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <AnimatedSection animation="fade-up">
              <div className="max-w-2xl mb-16">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">{t('testiBadge')}</p>
                <h2 className="text-4xl font-bold">{t('testiTitle')}</h2>
              </div>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((tItem, i) => (
                <AnimatedSection key={i} animation="fade-up" delay={i * 150}>
                  <div className="p-8 rounded-2xl bg-gray-900/50 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300 hover:-translate-y-1">
                    <p className="text-gray-300 leading-relaxed mb-6">"{t(`testi.${i}.text`)}"</p>
                    <div className="flex items-center gap-3">
                      <img src={tItem.avatar} alt="" className="w-10 h-10 rounded-full object-cover" loading="lazy" />
                      <div>
                        <p className="font-semibold text-sm">{t(`testi.${i}.name`)}</p>
                        <p className="text-xs text-gray-500">{t(`testi.${i}.role`)}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <CTA title={t('ctaTitle')} description={t('ctaDesc')} buttonText={t('ctaBtn')} buttonHref="#contact" />
      </main>

      <Footer brand="DevForge" links={footerLinks} />
    </div>
  );
}

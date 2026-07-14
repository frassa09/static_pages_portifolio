import Navbar from '../../../shared/components/Navbar';
import CTA from '../../../shared/components/CTA';
import Footer from '../../../shared/components/Footer';
import AnimatedSection from '../../../shared/components/AnimatedSection';
import LanguageToggle from '../../../shared/components/LanguageToggle';
import ScrollLink from '../../../shared/components/ScrollLink';
import useLanguage from '../../../shared/hooks/useLanguage';
import translations from '../../../shared/i18n/translations';

const features = [
  { icon: '📊', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop' },
  { icon: '🤝', image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&h=400&fit=crop' },
  { icon: '📧', image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&h=400&fit=crop' },
  { icon: '📈', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop' }
];

const pricingPlans = [
  { price: '$29', period: '/user/mo', features: ['500 contacts', 'Basic pipeline', 'Email tracking', 'Mobile app', 'Chat support'], featured: false },
  { price: '$79', period: '/user/mo', features: ['5,000 contacts', 'Advanced pipeline', 'AI follow-ups', 'Sales forecasting', 'API access', 'Priority support'], featured: true },
  { price: '$149', period: '/user/mo', features: ['Unlimited contacts', 'Custom objects', 'Territory management', 'SSO & SAML', 'Dedicated CSM', '99.9% SLA'], featured: false }
];

const stats = [
  { value: '47%', labelKey: 'More deals closed' },
  { value: '2.3x', labelKey: 'Faster follow-up' },
  { value: '12hrs', labelKey: 'Saved per rep/week' },
  { value: '4.8/5', labelKey: 'Customer rating' }
];

const faqs = [
  { q: { en: 'How long does it take to set up?', pt: 'Quanto tempo leva para configurar?' }, a: { en: 'Most teams are live in under a week.', pt: 'A maioria dos times está operacional em menos de uma semana.' } },
  { q: { en: 'Can I import data from my current CRM?', pt: 'Posso importar dados do meu CRM atual?' }, a: { en: 'Yes. One-click imports from HubSpot, Salesforce, Pipedrive, and CSV.', pt: 'Sim. Importações com um clique do HubSpot, Salesforce, Pipedrive e CSV.' } },
  { q: { en: 'Do you have a free trial?', pt: 'Vocês têm teste grátis?' }, a: { en: '14 days, full access, no credit card required.', pt: '14 dias, acesso total, sem cartão de crédito.' } },
  { q: { en: "What if I'm already using spreadsheets?", pt: 'E se eu já uso planilhas?' }, a: { en: "Perfect. That's exactly who we built this for.", pt: 'Perfeito. É exatamente para isso que construímos.' } }
];

const footerLinks = [
  { title: 'Product', items: [{ label: 'Features', href: '#features' }, { label: 'Pricing', href: '#pricing' }, { label: 'Integrations', href: '#' }] },
  { title: 'Resources', items: [{ label: 'Blog', href: '#' }, { label: 'Help Center', href: '#' }, { label: 'API Docs', href: '#' }] }
];

export default function App() {
  const { t, lang, toggleLanguage } = useLanguage(translations.crm);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar
        links={[{ label: t('nav.features'), href: '#features' }, { label: t('nav.pricing'), href: '#pricing' }, { label: t('nav.customers'), href: '#customers' }]}
        ctaText={t('nav.cta')}
        rightExtra={<LanguageToggle lang={lang} toggleLanguage={toggleLanguage} />}
      />

      <main>
        <section className="relative py-32 overflow-hidden">
          <div className="absolute top-20 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-50 rounded-full blur-3xl opacity-40" />
          <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
            <AnimatedSection animation="fade-up"><div className="inline-block mb-6 px-4 py-2 rounded-full bg-gray-100 text-sm text-gray-600 font-medium">{t('trial')}</div></AnimatedSection>
            <AnimatedSection animation="fade-up" delay={100}><h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">{t('title1')}<br /><span className="text-gray-400">{t('title2')}</span></h1></AnimatedSection>
            <AnimatedSection animation="fade-up" delay={200}><p className="mt-8 text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">{t('subtitle')}</p></AnimatedSection>
            <AnimatedSection animation="fade-up" delay={300}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <ScrollLink to="#pricing" className="px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-gray-900/20">{t('cta1')}</ScrollLink>
                <ScrollLink to="#features" className="px-8 py-4 border border-gray-300 rounded-full font-semibold text-gray-600 hover:bg-gray-50 transition-all hover:scale-105 active:scale-95">{t('cta2')}</ScrollLink>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={400}>
              <div className="mt-16 relative mx-auto max-w-3xl">
                <div className="rounded-2xl overflow-hidden shadow-2xl shadow-gray-200 border border-gray-100">
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=500&fit=crop" alt="CRM Dashboard" className="w-full" loading="lazy" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-100 rounded-2xl -z-10 float" />
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-purple-100 rounded-full -z-10 float-delayed" />
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-16 bg-gray-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, i) => (
                <AnimatedSection key={i} animation="scale-up" delay={i * 100}>
                  <div className="p-4">
                    <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">{stat.value}</div>
                    <div className="text-gray-500 mt-1 text-sm">{stat.labelKey}</div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <AnimatedSection animation="fade-up"><div className="max-w-2xl mb-16"><p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">{t('featuresBadge')}</p><h2 className="text-4xl font-bold whitespace-pre-line">{t('featuresTitle')}</h2></div></AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, i) => (
                <AnimatedSection key={i} animation="fade-up" delay={i * 120}>
                  <div className="group rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div className="img-zoom h-48"><img src={feature.image} alt="" loading="lazy" /></div>
                    <div className="p-8">
                      <div className="text-3xl mb-4">{feature.icon}</div>
                      <h3 className="text-xl font-semibold mb-3">{t(`features.${i}.title`)}</h3>
                      <p className="text-gray-500 leading-relaxed">{t(`features.${i}.desc`)}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section id="customers" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <AnimatedSection animation="fade-up"><div className="max-w-2xl mb-16"><p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">{t('customersBadge')}</p><h2 className="text-4xl font-bold">{t('customersTitle')}</h2></div></AnimatedSection>
          </div>
        </section>

        <section id="pricing" className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <AnimatedSection animation="fade-up"><div className="text-center mb-16"><p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">{t('pricingBadge')}</p><h2 className="text-4xl font-bold">{t('pricingTitle')}</h2><p className="mt-4 text-gray-500 text-lg">{t('pricingDesc')}</p></div></AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingPlans.map((plan, i) => (
                <AnimatedSection key={i} animation="fade-up" delay={i * 150}>
                  <div className={`rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${plan.featured ? 'bg-gray-900 text-white ring-2 ring-gray-900 relative shadow-2xl shadow-gray-900/20' : 'bg-white border border-gray-200 hover:shadow-xl'}`}>
                    {plan.featured && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold rounded-full">{t('plans.1.badge')}</div>}
                    <h3 className="text-lg font-semibold">{t(`plans.${i}.name`)}</h3>
                    <p className={`text-sm mt-1 ${plan.featured ? 'text-gray-400' : 'text-gray-500'}`}>{t(`plans.${i}.desc`)}</p>
                    <div className="mt-6"><span className="text-5xl font-bold">{plan.price}</span><span className={plan.featured ? 'text-gray-400' : 'text-gray-500'}>{plan.period}</span></div>
                    <ul className="mt-8 space-y-4">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-center text-sm">
                          <svg className={`w-5 h-5 mr-3 flex-shrink-0 ${plan.featured ? 'text-green-400' : 'text-green-500'}`} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className={`mt-8 w-full rounded-full py-3 font-semibold transition-all duration-300 hover:scale-105 active:scale-95 ${plan.featured ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-gray-900 text-white hover:bg-gray-800'}`}>{t(`plans.${i}.cta`)}</button>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gray-50">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <AnimatedSection animation="fade-up"><h2 className="text-3xl font-bold text-center mb-12">{t('faqTitle')}</h2></AnimatedSection>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <AnimatedSection key={i} animation="fade-up" delay={i * 100}>
                  <div className="p-6 rounded-xl bg-white border border-gray-200 hover:shadow-lg transition-all duration-300">
                    <h3 className="font-semibold text-lg mb-2">{typeof faq.q === 'object' ? faq.q[lang] : faq.q}</h3>
                    <p className="text-gray-500 leading-relaxed">{typeof faq.a === 'object' ? faq.a[lang] : faq.a}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <CTA title={t('ctaTitle')} description={t('ctaDesc')} buttonText={t('ctaBtn')} buttonHref="#" />
      </main>

      <Footer brand="CRM Pro" links={footerLinks} />
    </div>
  );
}

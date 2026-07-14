import Navbar from '../../../shared/components/Navbar';
import CTA from '../../../shared/components/CTA';
import Footer from '../../../shared/components/Footer';
import AnimatedSection from '../../../shared/components/AnimatedSection';
import LanguageToggle from '../../../shared/components/LanguageToggle';
import ScrollLink from '../../../shared/components/ScrollLink';
import useLanguage from '../../../shared/hooks/useLanguage';
import translations from '../../../shared/i18n/translations';

const programs = [
  { icon: '💻', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop', duration: '12w' },
  { icon: '📊', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop', duration: '16w' },
  { icon: '🎨', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop', duration: '12w' },
  { icon: '📈', image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&h=400&fit=crop', duration: '10w' }
];

const campusImages = [
  'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=400&fit=crop'
];

const admissionSteps = [
  { step: '01', title: { en: 'Apply Online', pt: 'Inscreva-se Online' }, desc: { en: 'No resume required. Tell us about yourself and your goals.', pt: 'Currículo não necessário. Conte-nos sobre você e seus objetivos.' } },
  { step: '02', title: { en: 'Aptitude Assessment', pt: 'Avaliação de Aptidão' }, desc: { en: "Not a knowledge test — we want to see how you think.", pt: 'Não é um teste de conhecimento — queremos ver como você pensa.' } },
  { step: '03', title: { en: 'Interview', pt: 'Entrevista' }, desc: { en: 'A 20-minute conversation about your motivations.', pt: 'Uma conversa de 20 minutos sobre suas motivações.' } },
  { step: '04', title: { en: 'Welcome Aboard', pt: 'Bem-vindo(a)' }, desc: { en: 'Cohorts of 30 students max. Everyone gets attention.', pt: 'Cohorts de no máximo 30 alunos. Todo mundo recebe atenção.' } }
];

const faqs = [
  { q: { en: 'Do I need prior experience?', pt: 'Preciso de experiência prévia?' }, a: { en: 'For Software Engineering and Data Science: some basic computer literacy, but no coding required. For Design and Marketing: none at all.', pt: 'Para Engenharia de Software e Data Science: alfabetização básica no computador, mas nenhum código necessário. Para Design e Marketing: nenhuma.' } },
  { q: { en: "What if I can't afford the tuition?", pt: 'E se eu não puder pagar a mensalidade?' }, a: { en: 'We offer income share agreements — pay nothing upfront, then pay a percentage of your salary after you get hired.', pt: 'Oferecemos acordos de compartilhamento de renda — não pague nada antecipadamente, depois pague um percentual do seu salário após ser contratado.' } },
  { q: { en: 'Is it really possible to get hired in 12 weeks?', pt: 'É realmente possível ser contratado em 12 semanas?' }, a: { en: 'Yes. 94% of graduates are employed within 6 months at an average salary of $82k.', pt: 'Sim. 94% dos formandos são empregados em 6 meses com salário médio de $82k.' } },
  { q: { en: 'Can I study while working?', pt: 'Posso estudar enquanto trabalho?' }, a: { en: 'Full-time programs require 40 hours/week. We also offer part-time evening programs.', pt: 'Programas em tempo integral requerem 40h/semana. Também oferecemos programas noturnos em tempo parcial.' } }
];

const footerLinks = [
  { title: 'Programs', items: [{ label: 'Software Engineering', href: '#programs' }, { label: 'Data Science & AI', href: '#programs' }, { label: 'UX/UI Design', href: '#programs' }] },
  { title: 'Resources', items: [{ label: 'Student Outcomes', href: '#outcomes' }, { label: 'Blog', href: '#' }, { label: 'FAQ', href: '#' }] }
];

export default function App() {
  const { t, lang, toggleLanguage } = useLanguage(translations.education);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar
        links={[{ label: t('nav.programs'), href: '#programs' }, { label: t('nav.outcomes'), href: '#outcomes' }, { label: t('nav.admissions'), href: '#admissions' }, { label: t('nav.campus'), href: '#campus' }]}
        ctaText={t('nav.cta')}
        rightExtra={<LanguageToggle lang={lang} toggleLanguage={toggleLanguage} />}
      />

      <main>
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0"><img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&h=1080&fit=crop" alt="" className="w-full h-full object-cover opacity-10" /></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-10 right-10 w-96 h-72 bg-indigo-100 rounded-full blur-3xl opacity-40" />
          <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
            <AnimatedSection animation="fade-up"><div className="inline-block mb-6 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">{t('badge')}</div></AnimatedSection>
            <AnimatedSection animation="fade-up" delay={100}><h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">{t('title1')}<br />{t('title2')}</h1></AnimatedSection>
            <AnimatedSection animation="fade-up" delay={200}><p className="mt-8 text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">{t('subtitle')}</p></AnimatedSection>
            <AnimatedSection animation="fade-up" delay={300}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                    <ScrollLink to="#admissions" className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-600/20">{t('cta1')}</ScrollLink>
                    <ScrollLink to="#programs" className="px-8 py-4 border border-gray-300 rounded-full font-semibold text-gray-600 hover:bg-gray-50 transition-all hover:scale-105 active:scale-95">{t('cta2')}</ScrollLink>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section id="programs" className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <AnimatedSection animation="fade-up"><div className="max-w-2xl mb-16"><p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">{t('programsBadge')}</p><h2 className="text-4xl font-bold">{t('programsTitle')}</h2></div></AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {programs.map((program, i) => (
                <AnimatedSection key={i} animation="fade-up" delay={i * 120}>
                  <div className="group rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="relative h-48 overflow-hidden">
                      <img src={program.image} alt="" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4 flex items-center gap-2">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium">{program.icon} {t(`programs.${i}.title`)}</span>
                        <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-medium">{program.duration}</span>
                      </div>
                    </div>
                    <div className="p-8">
                      <p className="text-gray-500 leading-relaxed mb-6">{t(`programs.${i}.desc`)}</p>
                      <ul className="space-y-2">
                        {t(`programs.${i}.outcomes`).map((outcome, j) => (
                          <li key={j} className="flex items-center text-sm text-gray-600">
                            <svg className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                            {outcome}
                          </li>
                        ))}
                      </ul>
                      <button className="mt-6 w-full py-3 rounded-full border border-gray-200 font-semibold text-sm hover:bg-blue-50 hover:border-blue-200 transition-all duration-300">{lang === 'pt' ? 'Saiba Mais' : 'Learn More'}</button>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section id="outcomes" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <AnimatedSection animation="fade-up"><div className="max-w-2xl mb-16"><p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">{t('outcomesBadge')}</p><h2 className="text-4xl font-bold">{t('outcomesTitle')}</h2></div></AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {t('testimonials').map((testi, i) => (
                <AnimatedSection key={i} animation="fade-up" delay={i * 150}>
                  <div className="p-8 rounded-2xl bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold text-sm">{t(`testimonials.${i}.name`).split(' ').map(n => n[0]).join('').slice(0, 2)}</div>
                      <div><p className="font-semibold text-sm">{t(`testimonials.${i}.name`)}</p><p className="text-xs text-gray-400">{t(`testimonials.${i}.role`)}</p></div>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm mb-4">"{testi.text}"</p>
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{t(`testimonials.${i}.program`)}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section id="admissions" className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <AnimatedSection animation="fade-up"><div className="max-w-2xl mb-16"><p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">{t('admissionsBadge')}</p><h2 className="text-4xl font-bold">{t('admissionsTitle')}</h2></div></AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {admissionSteps.map((step, i) => (
                <AnimatedSection key={i} animation="fade-up" delay={i * 120}>
                  <div>
                    <div className="text-6xl font-bold text-blue-100 mb-4">{step.step}</div>
                    <h3 className="text-lg font-semibold mb-2">{lang === 'pt' ? step.title.pt : step.title.en}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{lang === 'pt' ? step.desc.pt : step.desc.en}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section id="campus" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection animation="fade-left">
                <div className="grid grid-cols-2 gap-4">
                  {campusImages.map((img, i) => (
                    <div key={i} className={`aspect-square rounded-2xl overflow-hidden ${i % 2 === 1 ? 'mt-8' : ''}`}><img src={img} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" /></div>
                  ))}
                </div>
              </AnimatedSection>
              <AnimatedSection animation="fade-right" delay={200}>
                <div>
                  <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">{t('campusBadge')}</p>
                  <h2 className="text-4xl font-bold mb-6">{t('campusTitle')}</h2>
                  <p className="text-gray-500 leading-relaxed mb-6">{t('campusP1')}</p>
                  <p className="text-gray-500 leading-relaxed mb-8">{t('campusP2')}</p>
                  <div className="flex gap-4">
                    <a href="#" className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold text-sm hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-600/20">{t('campusCta1')}</a>
                    <a href="#" className="px-6 py-3 border border-gray-300 rounded-full font-semibold text-sm text-gray-600 hover:bg-gray-50 transition-all hover:scale-105 active:scale-95">{t('campusCta2')}</a>
                  </div>
                </div>
              </AnimatedSection>
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

      <Footer brand="Horizon Academy" links={footerLinks} />
    </div>
  );
}

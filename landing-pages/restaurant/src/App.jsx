import Navbar from '../../../shared/components/Navbar';
import CTA from '../../../shared/components/CTA';
import Footer from '../../../shared/components/Footer';
import AnimatedSection from '../../../shared/components/AnimatedSection';
import LanguageToggle from '../../../shared/components/LanguageToggle';
import ScrollLink from '../../../shared/components/ScrollLink';
import useLanguage from '../../../shared/hooks/useLanguage';
import translations from '../../../shared/i18n/translations';

const menuItems = [
  [
    { name: { en: 'Burrata & Heirloom Tomato', pt: 'Burrata & Tomate Heirloom' }, desc: { en: 'San Marzano, aged balsamic, basil oil', pt: 'San Marzano, balsâmico envelhecido, óleo de manjericão' }, price: '$18', image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=400&h=300&fit=crop' },
    { name: { en: 'Tuna Tartare', pt: 'Tartare de Atum' }, desc: { en: 'Avocado mousse, crispy shallots, yuzu ponzu', pt: 'Mousse de abacate, shallots crocantes, yuzu ponzu' }, price: '$22', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&h=300&fit=crop' },
    { name: { en: 'Mushroom Soup', pt: 'Sopa de Cogumelos' }, desc: { en: 'Wild porcini, truffle cream, sourdough croutons', pt: 'Porcini selvagem, creme de trufa, croutons de sourdough' }, price: '$16', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop' }
  ],
  [
    { name: { en: 'Dry-Aged Ribeye', pt: 'Ribeye Maturado' }, desc: { en: '45-day aged, bone marrow butter, charred broccolini', pt: 'Maturado por 45 dias, manteiga de medula, broccolini grelhado' }, price: '$58', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop' },
    { name: { en: 'Pan-Seared Branzino', pt: 'Branzino Grelhado' }, desc: { en: 'Mediterranean sea bass, fennel purée, olive tapenade', pt: 'Robalo mediterrâneo, purê de funcho, tapenade de azeitona' }, price: '$42', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a0?w=400&h=300&fit=crop' },
    { name: { en: 'Lobster Risotto', pt: 'Risoto de Lagosta' }, desc: { en: 'Maine lobster, saffron arborio, parmesan foam', pt: 'Lagosta do Maine, arborio com açafrão, espuma de parmesão' }, price: '$48', image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&h=300&fit=crop' },
    { name: { en: 'Lamb Shank', pt: 'Pernil de Cordeiro' }, desc: { en: 'Braised 8 hours, polenta, rosemary jus', pt: 'Braseado por 8 horas, polenta, molho de alecrim' }, price: '$44', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop' }
  ],
  [
    { name: { en: 'Crème Brûlée', pt: 'Crème Brûlée' }, desc: { en: 'Madagascar vanilla, seasonal fruit', pt: 'Baunilha de Madagascar, frutas da estação' }, price: '$14', image: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=400&h=300&fit=crop' },
    { name: { en: 'Chocolate Fondant', pt: 'Fondant de Chocolate' }, desc: { en: 'Valrhona 70%, salted caramel, vanilla gelato', pt: 'Valrhona 70%, caramelo salgado, gelato de baunilha' }, price: '$16', image: 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=400&h=300&fit=crop' }
  ]
];

const team = [
  { name: 'Camila Ferreira', role: { en: 'Chef & Founder', pt: 'Chef & Fundadora' }, bio: { en: 'Trained at Noma and Mirazur.', pt: 'Treinada no Noma e Mirazur.' }, avatar: 'https://images.unsplash.com/photo-1583394293214-28ez1c1677c5?w=200&h=200&fit=crop&crop=face' },
  { name: 'Lucas Andrade', role: { en: 'Sous Chef', pt: 'Chef Executivo' }, bio: { en: '15 years in São Paulo kitchens.', pt: '15 anos em cozinhas de São Paulo.' }, avatar: 'https://images.unsplash.com/photo-1577219491135-ce3993974534?w=200&h=200&fit=crop&crop=face' },
  { name: 'Maria Santos', role: { en: 'General Manager', pt: 'Gerente Geral' }, bio: { en: 'Former sommelier. Wine list curator.', pt: 'Ex-sommelier. Curadora da carta de vinhos.' }, avatar: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=200&h=200&fit=crop&crop=face' }
];

const footerLinks = [
  { title: 'Visit Us', items: [{ label: 'Rua Augusta 1847, São Paulo', href: '#' }, { label: 'Tue-Sat: 7pm-11pm', href: '#' }, { label: 'Closed Sun-Mon', href: '#' }] },
  { title: 'Connect', items: [{ label: '@lamaison.sp', href: '#' }, { label: 'info@lamaison.com.br', href: 'mailto:info@lamaison.com.br' }] }
];

export default function App() {
  const { t, lang, toggleLanguage } = useLanguage(translations.restaurant);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <Navbar
        links={[{ label: t('nav.menu'), href: '#menu' }, { label: t('nav.story'), href: '#story' }, { label: t('nav.reservations'), href: '#reservations' }]}
        ctaText={t('nav.cta')}
        rightExtra={<LanguageToggle lang={lang} toggleLanguage={toggleLanguage} />}
      />

      <main>
        <section className="relative h-[90vh] min-h-[650px] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=1080&fit=crop" alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/70 to-stone-900/90" />
          </div>
          <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
            <AnimatedSection animation="fade-up"><p className="text-amber-400/80 text-sm font-medium tracking-[0.2em] uppercase mb-6">{t('heroSub')}</p></AnimatedSection>
            <AnimatedSection animation="fade-up" delay={150}>
              <h1 className="text-5xl lg:text-7xl font-serif text-white leading-[1.1] tracking-tight drop-shadow-lg">
                {t('title1')}<br />{t('title2')}<br />{t('title3')}
              </h1>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={300}><p className="mt-8 text-lg text-stone-200 max-w-xl mx-auto leading-relaxed drop-shadow">{t('subtitle')}</p></AnimatedSection>
            <AnimatedSection animation="fade-up" delay={450}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <ScrollLink to="#reservations" className="px-8 py-4 bg-amber-500 text-stone-900 rounded-full font-semibold hover:bg-amber-400 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/20">{t('cta1')}</ScrollLink>
                <ScrollLink to="#menu" className="px-8 py-4 border border-stone-400/30 rounded-full font-semibold text-stone-200 hover:bg-white/10 backdrop-blur-sm transition-all hover:scale-105 active:scale-95">{t('cta2')}</ScrollLink>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section id="menu" className="py-24">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <AnimatedSection animation="fade-up"><div className="text-center mb-16"><p className="text-amber-600 text-sm font-medium tracking-[0.2em] uppercase mb-3">{t('menuBadge')}</p><h2 className="text-4xl lg:text-5xl font-serif">{t('menuTitle')}</h2><p className="mt-4 text-stone-500">{t('menuDesc')}</p></div></AnimatedSection>
            {menuItems.map((section, si) => (
              <div key={si} className="mb-16">
                <AnimatedSection animation="fade-left"><h3 className="text-sm font-semibold text-amber-700 uppercase tracking-[0.15em] mb-8 pb-3 border-b border-amber-200">{t(`sections.${si}`)}</h3></AnimatedSection>
                <div className="space-y-6">
                  {section.map((item, i) => (
                    <AnimatedSection key={i} animation="fade-up" delay={i * 80}>
                      <div className="group flex items-center gap-6 p-4 rounded-xl hover:bg-white transition-all duration-300 hover:shadow-md cursor-pointer">
                        <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0"><img src={item.image} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" /></div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-baseline justify-between gap-4">
                            <h4 className="text-lg font-medium group-hover:text-amber-700 transition-colors">{lang === 'pt' ? item.name.pt : item.name.en}</h4>
                            <span className="text-lg font-medium text-amber-700 whitespace-nowrap">{item.price}</span>
                          </div>
                          <p className="text-stone-500 text-sm mt-0.5">{lang === 'pt' ? item.desc.pt : item.desc.en}</p>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            ))}
            <AnimatedSection animation="fade-up"><p className="text-center text-sm text-stone-400 mt-8">{t('menuNote')}</p></AnimatedSection>
          </div>
        </section>

        <section id="story" className="py-24 bg-stone-900 text-stone-100 overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <AnimatedSection animation="fade-right">
                <div>
                  <p className="text-amber-400 text-sm font-medium tracking-[0.2em] uppercase mb-4">{t('storyBadge')}</p>
                  <h2 className="text-3xl lg:text-4xl font-serif leading-snug mb-8">{t('storyTitle')}</h2>
                  {t('storyBody').map((paragraph, i) => (
                    <p key={i} className="text-stone-300 leading-relaxed mb-4">{paragraph}</p>
                  ))}
                </div>
              </AnimatedSection>
              <AnimatedSection animation="fade-left" delay={200}>
                <div className="lg:sticky lg:top-32">
                  <div className="relative rounded-2xl overflow-hidden mb-8"><img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&h=400&fit=crop" alt="" className="w-full h-64 object-cover" loading="lazy" /><div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" /></div>
                  <div className="bg-stone-800 rounded-2xl p-8 border border-stone-700/50">
                    <div className="text-4xl text-amber-400 mb-4 font-serif">"</div>
                    <blockquote className="text-lg text-stone-200 leading-relaxed font-serif italic">{t('quote')}</blockquote>
                    <div className="mt-6 flex items-center gap-3">
                      <img src={team[0].avatar} alt="" className="w-10 h-10 rounded-full object-cover" loading="lazy" />
                      <div><p className="font-medium text-sm">Chef Camila Ferreira</p><p className="text-xs text-stone-400">{lang === 'pt' ? 'Chef & Fundadora' : 'Chef & Founder'}</p></div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <AnimatedSection animation="fade-up"><div className="text-center mb-16"><p className="text-amber-600 text-sm font-medium tracking-[0.2em] uppercase mb-3">{t('teamBadge')}</p><h2 className="text-4xl font-serif">{t('teamTitle')}</h2></div></AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, i) => (
                <AnimatedSection key={i} animation="fade-up" delay={i * 150}>
                  <div className="text-center p-8 rounded-2xl bg-white border border-stone-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 ring-4 ring-amber-100"><img src={member.avatar} alt="" className="w-full h-full object-cover" loading="lazy" /></div>
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <p className="text-amber-600 text-sm font-medium">{lang === 'pt' ? member.role.pt : member.role.en}</p>
                    <p className="mt-3 text-stone-500 text-sm leading-relaxed">{lang === 'pt' ? member.bio.pt : member.bio.en}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section id="reservations" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0"><img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=600&fit=crop" alt="" className="w-full h-full object-cover" /><div className="absolute inset-0 bg-stone-900/80 backdrop-blur-sm" /></div>
          <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <AnimatedSection animation="scale-up">
              <p className="text-amber-400 text-sm font-medium tracking-[0.2em] uppercase mb-4">{t('nav.reservations')}</p>
              <h2 className="text-4xl lg:text-5xl font-serif text-white mb-6">{t('reservTitle')}</h2>
              <p className="text-stone-300 text-lg mb-10 max-w-xl mx-auto">{t('reservDesc')}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://resy.com" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-amber-500 text-stone-900 rounded-full font-semibold hover:bg-amber-400 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/20">Resy</a>
                <a href="tel:+551130428871" className="px-8 py-4 border border-stone-400/30 rounded-full font-semibold text-stone-200 hover:bg-white/10 transition-all hover:scale-105 active:scale-95">{lang === 'pt' ? 'Ligue' : 'Call Us'}</a>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <CTA title={t('ctaTitle')} description={t('ctaDesc')} buttonText={t('ctaBtn')} buttonHref="#" />
      </main>

      <Footer brand="La Maison" links={footerLinks} />
    </div>
  );
}

import Navbar from '../../../shared/components/Navbar';
import CTA from '../../../shared/components/CTA';
import Footer from '../../../shared/components/Footer';
import AnimatedSection from '../../../shared/components/AnimatedSection';
import LanguageToggle from '../../../shared/components/LanguageToggle';
import ScrollLink from '../../../shared/components/ScrollLink';
import useLanguage from '../../../shared/hooks/useLanguage';
import translations from '../../../shared/i18n/translations';

const newArrivals = [
  { name: { en: 'Linen Oversized Shirt', pt: 'Camisa Linho Oversized' }, price: '$89', tag: 'New', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=560&fit=crop' },
  { name: { en: 'High-Rise Wide Leg', pt: 'Calça Wide Leg Alta' }, price: '$125', tag: 'New', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=560&fit=crop' },
  { name: { en: 'Merino Knit Polo', pt: 'Polo de Lã Merino' }, price: '$95', tag: null, image: 'https://images.unsplash.com/photo-1625910513413-5fc42ffd2c81?w=400&h=560&fit=crop' },
  { name: { en: 'Cotton Canvas Jacket', pt: 'Jaqueta de Lona de Algodão' }, price: '$185', tag: 'New', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=560&fit=crop' },
  { name: { en: 'Silk Blend Dress', pt: 'Vestido de Seda' }, price: '$165', tag: null, image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=560&fit=crop' },
  { name: { en: 'Relaxed Chinos', pt: 'Chino Relaxado' }, price: '$79', tag: null, image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=560&fit=crop' },
  { name: { en: 'Wool Blend Coat', pt: 'Casaco de Lã' }, price: '$295', tag: 'New', image: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=400&h=560&fit=crop' },
  { name: { en: 'Cashmere Scarf', pt: 'Cachecol de Caxemira' }, price: '$65', tag: null, image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=400&h=560&fit=crop' }
];

const saleItems = [
  { name: { en: 'Cotton T-Shirt', pt: 'Camiseta de Algodão' }, price: '$29', originalPrice: '$45', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=560&fit=crop' },
  { name: { en: 'Slim Fit Jeans', pt: 'Jeans Slim Fit' }, price: '$59', originalPrice: '$89', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=560&fit=crop' },
  { name: { en: 'Summer Dress', pt: 'Vestido de Verão' }, price: '$79', originalPrice: '$125', image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=560&fit=crop' },
  { name: { en: 'Leather Belt', pt: 'Cinto de Couro' }, price: '$35', originalPrice: '$55', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=560&fit=crop' }
];

const lookbook = [
  { image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=800&fit=crop', caption: { en: 'Summer Essentials', pt: 'Essenciais de Verão' } },
  { image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop', caption: { en: 'The Minimal Edit', pt: 'Edição Minimalista' } },
  { image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=800&fit=crop', caption: { en: 'Evening Wear', pt: 'Vestuário Noturno' } }
];

const values = [
  { title: { en: 'Fabric First', pt: 'Tecido em Primeiro' }, desc: { en: 'Every collection starts with the material.', pt: 'Toda coleção começa com o material.' } },
  { title: { en: 'Designed to Last', pt: 'Projetado para Durar' }, desc: { en: "Our pieces don't follow trends. They outlive them.", pt: 'Nossas peças não seguem tendências. Elas sobrevivem a elas.' } },
  { title: { en: 'Honest Production', pt: 'Produção Honesta' }, desc: { en: 'Fair wages, safe conditions, small batches.', pt: 'Salários justos, condições seguras, pequenos lotes.' } }
];

const footerLinks = [
  { title: 'Shop', items: [{ label: 'New Arrivals', href: '#new' }, { label: 'Best Sellers', href: '#' }, { label: 'Sale', href: '#sale' }] },
  { title: 'Help', items: [{ label: 'Size Guide', href: '#' }, { label: 'Shipping', href: '#' }, { label: 'Returns', href: '#' }] }
];

export default function App() {
  const { t, lang, toggleLanguage } = useLanguage(translations.clothing);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar
        links={[{ label: t('nav.new'), href: '#new' }, { label: t('nav.collections'), href: '#collections' }, { label: t('nav.about'), href: '#about' }, { label: t('nav.sale'), href: '#sale' }]}
        ctaText={t('nav.cta')}
        rightExtra={<LanguageToggle lang={lang} toggleLanguage={toggleLanguage} />}
      />

      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full"><img src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&h=800&fit=crop" alt="" className="w-full h-full object-cover opacity-20" /></div>
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection animation="fade-left">
                <div>
                  <p className="text-sm font-medium text-stone-400 tracking-[0.2em] uppercase mb-6">{t('collectionBadge')}</p>
                  <h1 className="text-5xl lg:text-7xl font-serif text-stone-900 leading-[1.1] tracking-tight">{t('title1')}<br />{t('title2')}</h1>
                  <p className="mt-8 text-xl text-stone-500 leading-relaxed">{t('subtitle')}</p>
                  <div className="mt-10 flex flex-col sm:flex-row gap-4">
                    <ScrollLink to="#new" className="px-8 py-4 bg-stone-900 text-white rounded-full font-semibold hover:bg-stone-800 transition-all hover:scale-105 active:scale-95 shadow-lg">{t('cta1')}</ScrollLink>
                    <ScrollLink to="#about" className="px-8 py-4 border border-stone-300 rounded-full font-semibold text-stone-600 hover:bg-stone-50 transition-all hover:scale-105 active:scale-95">{t('cta2')}</ScrollLink>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="fade-right" delay={200}>
                <div className="relative">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl"><img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=800&fit=crop" alt="" className="w-full h-full object-cover" loading="lazy" /></div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl overflow-hidden shadow-xl border-4 border-white float"><img src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=200&h=200&fit=crop" alt="" className="w-full h-full object-cover" loading="lazy" /></div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section id="new" className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <AnimatedSection animation="fade-up"><div className="flex items-end justify-between mb-12"><div><p className="text-sm font-medium text-stone-400 tracking-[0.15em] uppercase mb-2">{t('newBadge')}</p><h2 className="text-3xl font-serif">{t('newTitle')}</h2></div><a href="#" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors underline underline-offset-4">{t('viewAll')}</a></div></AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
              {newArrivals.map((product, i) => (
                <AnimatedSection key={i} animation="fade-up" delay={i * 80}>
                  <div className="group cursor-pointer">
                    <div className="aspect-[3/4] rounded-xl overflow-hidden mb-3 relative bg-stone-100">
                      <img src={product.image} alt="" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      {product.tag && <span className="absolute top-3 left-3 px-2 py-1 bg-stone-900 text-white text-xs font-medium rounded-full">{product.tag}</span>}
                    </div>
                    <h3 className="text-sm font-medium group-hover:text-stone-600 transition-colors">{lang === 'pt' ? product.name.pt : product.name.en}</h3>
                    <p className="text-sm text-stone-500 mt-0.5">{product.price}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section id="collections" className="py-24 bg-stone-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <AnimatedSection animation="fade-up"><div className="text-center mb-16"><p className="text-sm font-medium text-stone-400 tracking-[0.15em] uppercase mb-2">{t('collectionsBadge')}</p><h2 className="text-3xl font-serif">{t('collectionsTitle')}</h2></div></AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {lookbook.map((item, i) => (
                <AnimatedSection key={i} animation="fade-up" delay={i * 150}>
                  <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer">
                    <img src={item.image} alt="" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <p className="text-white font-serif text-lg">{lang === 'pt' ? item.caption.pt : item.caption.en}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-24 bg-stone-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection animation="fade-left">
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden"><img src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&h=560&fit=crop" alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" /></div>
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden mt-8"><img src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400&h=560&fit=crop" alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" /></div>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="fade-right" delay={200}>
                <div>
                  <p className="text-sm font-medium text-stone-400 tracking-[0.15em] uppercase mb-4">{t('aboutBadge')}</p>
                  <h2 className="text-4xl font-serif leading-snug mb-8 whitespace-pre-line">{t('aboutTitle')}</h2>
                  <p className="text-stone-500 leading-relaxed mb-6">{t('aboutP1')}</p>
                  <p className="text-stone-500 leading-relaxed mb-8">{t('aboutP2')}</p>
                  <div className="space-y-6">
                    {values.map((v, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center flex-shrink-0 mt-0.5"><span className="text-stone-600 text-sm font-serif">{i + 1}</span></div>
                        <div><h3 className="font-semibold mb-1">{lang === 'pt' ? v.title.pt : v.title.en}</h3><p className="text-sm text-stone-500 leading-relaxed">{lang === 'pt' ? v.desc.pt : v.desc.en}</p></div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section id="sale" className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <AnimatedSection animation="fade-up"><div className="mb-12"><p className="text-sm font-medium text-rose-400 tracking-[0.15em] uppercase mb-2">{t('saleBadge')}</p><h2 className="text-3xl font-serif">{t('saleTitle')}</h2></div></AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
              {saleItems.map((product, i) => (
                <AnimatedSection key={i} animation="fade-up" delay={i * 100}>
                  <div className="group cursor-pointer">
                    <div className="aspect-[3/4] rounded-xl overflow-hidden mb-3 relative bg-stone-100">
                      <img src={product.image} alt="" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute top-3 right-3 px-2 py-1 bg-rose-500 text-white text-xs font-medium rounded-full">-{Math.round((1 - parseInt(product.price.slice(1)) / parseInt(product.originalPrice.slice(1))) * 100)}%</div>
                    </div>
                    <h3 className="text-sm font-medium group-hover:text-stone-600 transition-colors">{lang === 'pt' ? product.name.pt : product.name.en}</h3>
                    <div className="flex items-center gap-2 mt-0.5"><span className="text-sm font-semibold text-rose-600">{product.price}</span><span className="text-sm text-stone-400 line-through">{product.originalPrice}</span></div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-stone-900 text-white">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <AnimatedSection animation="scale-up">
              <h2 className="text-4xl font-serif mb-4">{t('newsletter')}</h2>
              <p className="text-stone-300 text-lg mb-10">{t('newsletterDesc')}</p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input type="email" placeholder={lang === 'pt' ? 'seu@email.com' : 'your@email.com'} className="flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all" />
                <button className="px-6 py-3 bg-white text-stone-900 rounded-full font-semibold hover:bg-stone-100 transition-all hover:scale-105 active:scale-95 whitespace-nowrap">{t('newsletterBtn')}</button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <CTA title={t('ctaTitle')} description={t('ctaDesc')} buttonText={t('ctaBtn')} buttonHref="#" />
      </main>

      <Footer brand="Maison" links={footerLinks} />
    </div>
  );
}

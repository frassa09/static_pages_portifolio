import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import AnimatedSection from '../../shared/components/AnimatedSection';
import LanguageToggle from '../../shared/components/LanguageToggle';
import useLanguage from '../../shared/hooks/useLanguage';
import translations from '../../shared/i18n/translations';

const projectGradients = {
  agency: 'from-coral/25 via-peach/20 to-sand/30',
  crm: 'from-coral/20 via-sand/25 to-peach/15',
  restaurant: 'from-peach/25 via-coral/20 to-sand/20',
  clothing: 'from-coral/20 via-peach/25 to-sand/20',
  education: 'from-sand/30 via-coral/15 to-peach/20'
};

const projectIcons = { agency: '🚀', crm: '📊', restaurant: '🍽️', clothing: '👗', education: '🎓' };
const projectPaths = { agency: '/agency-software', crm: '/saas-crm', restaurant: '/restaurant', clothing: '/clothing-store', education: '/education-institution' };

const techStack = [
  { name: 'React', icon: '⚛️' },
  { name: 'Vite', icon: '⚡' },
  { name: 'Tailwind CSS', icon: '🎨' },
  { name: 'JavaScript', icon: '📜' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Git', icon: '📦' }
];

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

function MagneticElement({ children, className = '', strength = 0.3 }) {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;
      setOffset({ x: deltaX, y: deltaY });
    };

    const handleMouseLeave = () => setOffset({ x: 0, y: 0 });

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ transform: `translate(${offset.x}px, ${offset.y}px)`, transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}
    >
      {children}
    </div>
  );
}

function GlassCard({ children, className = '', ...props }) {
  return (
    <div className={`glass-card ${className}`} {...props}>
      {children}
      <div className="glass-glow absolute -top-16 -right-16 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </div>
  );
}

export default function HubApp() {
  const { t, lang, toggleLanguage } = useLanguage(translations.hub);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-canvas-soft">
      {/* Layered ambient background — liquid glass orbs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] bg-coral/[0.12] rounded-full blur-[140px] animate-blob" />
        <div className="absolute top-[30%] right-[-15%] w-[600px] h-[600px] bg-peach/[0.10] rounded-full blur-[140px] animate-blob-delayed" />
        <div className="absolute bottom-[-15%] left-[25%] w-[550px] h-[550px] bg-sand/50 rounded-full blur-[140px] animate-blob-delayed-2" />

        {/* Floating glass orbs — decorative */}
        <div className="absolute top-[15%] left-[10%] w-40 h-40 glass-float rounded-full animate-float opacity-50" />
        <div className="absolute top-[60%] right-[15%] w-32 h-32 glass-float rounded-full animate-float-delayed opacity-40" />
        <div className="absolute top-[40%] left-[60%] w-28 h-28 glass-float rounded-2xl rotate-45 animate-slow-drift opacity-35" />
        <div className="absolute bottom-[20%] left-[5%] w-24 h-24 glass-float rounded-full animate-float-delayed opacity-45" />
        <div className="absolute top-[80%] right-[30%] w-36 h-36 glass-float rounded-full animate-float opacity-30" />

        {/* Decorative glow orbs — liquid glass refraction */}
        <div className="absolute top-[10%] right-[20%] w-64 h-64 glass-glow glass-glow-coral animate-glow-pulse" />
        <div className="absolute bottom-[30%] left-[15%] w-48 h-48 glass-glow animate-glow-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Glass Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 glass-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <MagneticElement strength={0.15}>
              <div className="glass-btn px-4 py-1.5 rounded-full">
                <span className="text-ink font-semibold text-lg tracking-tight">
                  Renato<span className="text-coral">Frassa</span>
                </span>
              </div>
            </MagneticElement>
          </Link>
          <div className="hidden md:flex items-center gap-1">
            <button onClick={() => scrollTo('projects')} className="glass-nav-link px-4 py-2 text-sm text-body hover:text-ink rounded-full">
              {t('nav.projects')}
            </button>
            <button onClick={() => scrollTo('about')} className="glass-nav-link px-4 py-2 text-sm text-body hover:text-ink rounded-full">
              {t('nav.about')}
            </button>
            <button onClick={() => scrollTo('stack')} className="glass-nav-link px-4 py-2 text-sm text-body hover:text-ink rounded-full">
              {t('nav.stack')}
            </button>
            <MagneticElement strength={0.2}>
              <a
                href="https://github.com/frassa09"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-btn px-4 py-2 rounded-full text-sm text-ink font-medium ml-2"
              >
                {t('nav.github')}
              </a>
            </MagneticElement>
            <LanguageToggle lang={lang} toggleLanguage={toggleLanguage} />
          </div>
          <div className="md:hidden flex items-center gap-2">
            <LanguageToggle lang={lang} toggleLanguage={toggleLanguage} />
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        {/* Hero — liquid glass layers */}
        <section className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-16 relative">
          {/* Hero glass backdrop */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[800px] h-[600px] glass-float rounded-[40px] rotate-3 opacity-45 animate-float" />
          </div>
          {/* Decorative glow behind hero */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 glass-glow glass-glow-coral animate-glow-pulse pointer-events-none" />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <AnimatedSection animation="fade-up">
              <MagneticElement strength={0.1}>
                <div className="inline-flex items-center gap-2 glass-pill px-5 py-2 rounded-full mb-8">
                  <div className="w-2 h-2 bg-coral rounded-full animate-pulse" />
                  <span className="text-sm text-body font-medium">{t('hero.badge')}</span>
                </div>
              </MagneticElement>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={100}>
              <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-serif font-semibold text-ink leading-[1.05] tracking-[-0.03em] mb-6">
                <span>{t('hero.title1')}</span>
                <br />
                <span className="text-coral">
                  {t('hero.title2')}
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <p className="text-lg sm:text-xl text-body max-w-xl mx-auto leading-relaxed mb-10">
                {t('hero.subtitle')}
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticElement strength={0.2}>
                  <button
                    onClick={() => scrollTo('projects')}
                    className="glass-btn-solid px-8 py-4 rounded-full font-medium text-sm"
                  >
                    {t('hero.cta1')}
                  </button>
                </MagneticElement>
                <MagneticElement strength={0.2}>
                  <a
                    href="https://github.com/frassa09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-btn px-8 py-4 rounded-full font-medium text-sm text-ink inline-block"
                  >
                    {t('hero.cta2')}
                  </a>
                </MagneticElement>
              </div>
            </AnimatedSection>

            <div className="mt-16 flex justify-center gap-4">
              <a
                href="https://github.com/frassa09"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-icon-btn w-12 h-12 rounded-xl text-muted hover:text-ink"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="mailto:renatofrassa09@gmail.com"
                className="glass-icon-btn w-12 h-12 rounded-xl text-muted hover:text-ink"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Projects — glass section with backdrop */}
        <section id="projects" className="py-32 px-6 lg:px-8 relative">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full glass-float rounded-[60px] opacity-30" />
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <p className="text-sm text-coral uppercase tracking-[0.15em] font-semibold mb-3">{t('projects.badge')}</p>
                <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-ink tracking-[-0.03em]">{t('projects.title')}</h2>
                <p className="mt-4 text-body max-w-lg mx-auto">{t('projects.subtitle')}</p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.keys(projectGradients).map((key, i) => (
                <AnimatedSection key={key} animation="fade-up" delay={i * 100}>
                  <MagneticElement strength={0.08}>
                    <Link
                      to={projectPaths[key]}
                      className="group glass-card rounded-glass p-6 block"
                    >
                      <div className={`h-40 rounded-xl bg-gradient-to-br ${projectGradients[key]} mb-5 relative overflow-hidden`}>
                        <div className="absolute inset-0 glass-float opacity-30 group-hover:opacity-60 transition-all duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute top-3 left-3 text-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">{projectIcons[key]}</div>
                      </div>
                      <div className="relative z-10">
                        <p className="text-xs text-muted uppercase tracking-wider mb-1 font-semibold">{t(`projects.items.${key}.subtitle`)}</p>
                        <h3 className="text-xl font-serif font-semibold text-ink group-hover:text-coral transition-colors duration-300 mb-2 capitalize">
                          {key === 'crm' ? 'CRM Pro' : key === 'education' ? 'Horizon Academy' : key === 'restaurant' ? 'La Maison' : key === 'clothing' ? 'Maison' : 'DevForge'}
                        </h3>
                        <p className="text-sm text-body leading-relaxed mb-4">{t(`projects.items.${key}.description`)}</p>
                        <div className="flex flex-wrap gap-2">
                          {t(`projects.items.${key}.tags`).map((tag, j) => (
                            <span key={j} className="text-xs px-2.5 py-1 rounded-full glass-pill text-body">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  </MagneticElement>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* About — glass card with floating elements */}
        <section id="about" className="py-32 px-6 lg:px-8 relative">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection animation="fade-up">
              <div className="glass-card rounded-glass p-8 sm:p-12 relative">
                {/* Decorative glow orbs */}
                <div className="glass-glow glass-glow-coral absolute -top-20 -right-20 animate-glow-pulse" />
                <div className="glass-glow absolute -bottom-16 -left-16 animate-glow-pulse" style={{ animationDelay: '2s' }} />
                {/* Floating decorative glass elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 glass-float rounded-full opacity-55 animate-float" />
                <div className="absolute -bottom-4 -left-4 w-20 h-20 glass-float rounded-2xl rotate-12 opacity-45 animate-float-delayed" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                  <div>
                    <p className="text-sm text-coral uppercase tracking-[0.15em] font-semibold mb-3">{t('about.badge')}</p>
                    <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-ink tracking-[-0.03em] mb-6">{t('about.title')}</h2>
                    <div className="space-y-4 text-body leading-relaxed">
                      <p>{t('about.p1')}</p>
                      <p>{t('about.p2')}</p>
                      <p>{t('about.p3')}</p>
                    </div>
                    <div className="mt-8 flex flex-col sm:flex-row gap-3">
                      <MagneticElement strength={0.15}>
                        <a href="https://github.com/frassa09" target="_blank" rel="noopener noreferrer" className="glass-btn px-6 py-3 rounded-full text-sm font-medium text-ink inline-flex items-center gap-2">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          {t('about.github')}
                        </a>
                      </MagneticElement>
                      <MagneticElement strength={0.15}>
                        <a href="mailto:renatofrassa09@gmail.com" className="glass-btn px-6 py-3 rounded-full text-sm font-medium text-ink inline-flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                          </svg>
                          {t('about.email')}
                        </a>
                      </MagneticElement>
                    </div>
                  </div>
                  <div className="relative">
                    <MagneticElement strength={0.1}>
                      <div className="aspect-square rounded-2xl glass-float flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-coral/10 via-transparent to-sand/20" />
                        <div className="glass-glow glass-glow-coral absolute top-0 right-0 -mr-8 -mt-8 w-48 h-48 animate-glow-pulse" />
                        <div className="text-center relative z-10">
                          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-coral to-peach flex items-center justify-center text-5xl font-serif font-semibold text-white mx-auto mb-4 shadow-lg shadow-coral/20 transition-transform duration-500 hover:scale-105 hover:rotate-3">
                            RF
                          </div>
                          <p className="text-ink font-serif text-xl font-semibold">Renato Frassa</p>
                          <p className="text-muted text-sm mt-1">{t('about.role')}</p>
                        </div>
                      </div>
                    </MagneticElement>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Tech Stack — glass grid */}
        <section id="stack" className="py-32 px-6 lg:px-8 relative">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] glass-float rounded-[40px] rotate-[-3deg] opacity-25" />
          </div>
          <div className="max-w-4xl mx-auto relative z-10">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-12">
                <p className="text-sm text-coral uppercase tracking-[0.15em] font-semibold mb-3">{t('stack.badge')}</p>
                <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-ink tracking-[-0.03em]">{t('stack.title')}</h2>
              </div>
            </AnimatedSection>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
              {techStack.map((tech, i) => (
                <AnimatedSection key={i} animation="scale-up" delay={i * 80}>
                  <MagneticElement strength={0.12}>
                    <div className="glass-card rounded-glass p-8 text-center group relative z-10">
                      <div className="glass-glow absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      <div className="text-4xl mb-4 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12">{tech.icon}</div>
                      <p className="text-sm font-semibold text-body group-hover:text-ink transition-colors duration-300">{tech.name}</p>
                    </div>
                  </MagneticElement>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Contact — prominent glass card */}
        <section className="py-32 px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <AnimatedSection animation="fade-up">
              <div className="glass-card rounded-glass p-10 sm:p-14 relative z-10">
                <div className="glass-glow glass-glow-coral absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 animate-glow-pulse" />
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-36 h-14 glass-float rounded-full opacity-60 animate-float" />
                <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-ink tracking-[-0.03em] mb-4">{t('contact.title')}</h2>
                <p className="text-body mb-8 max-w-md mx-auto">{t('contact.subtitle')}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <MagneticElement strength={0.2}>
                    <a href="mailto:renatofrassa09@gmail.com" className="glass-btn-solid px-8 py-4 rounded-full font-medium text-sm inline-flex items-center justify-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                      {t('contact.email')}
                    </a>
                  </MagneticElement>
                  <MagneticElement strength={0.2}>
                    <a href="https://github.com/frassa09" target="_blank" rel="noopener noreferrer" className="glass-btn px-8 py-4 rounded-full font-medium text-sm text-ink inline-flex items-center justify-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  </MagneticElement>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 px-6 lg:px-8 bg-ink">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-white/40 text-sm">
              © 2026 <span className="font-medium text-white/60">Renato Frassa</span>. {t('footer.copyright')}
            </span>
            <div className="flex items-center gap-4">
              <a href="https://github.com/frassa09" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white/70 transition-colors text-sm">{t('footer.github')}</a>
              <a href="mailto:renatofrassa09@gmail.com" className="text-white/40 hover:text-white/70 transition-colors text-sm">{t('footer.email')}</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

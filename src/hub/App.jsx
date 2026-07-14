import { Link } from 'react-router-dom';
import AnimatedSection from '../../shared/components/AnimatedSection';
import LanguageToggle from '../../shared/components/LanguageToggle';
import useLanguage from '../../shared/hooks/useLanguage';
import translations from '../../shared/i18n/translations';

const projectGradients = {
  agency: 'from-violet-500 via-purple-500 to-fuchsia-500',
  crm: 'from-blue-500 via-cyan-500 to-teal-500',
  restaurant: 'from-orange-500 via-amber-500 to-yellow-500',
  clothing: 'from-pink-500 via-rose-500 to-red-500',
  education: 'from-emerald-500 via-green-500 to-lime-500'
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

export default function HubApp() {
  const { t, lang, toggleLanguage } = useLanguage(translations.hub);

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0a0a1a]">
      {/* Animated gradient blobs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px] animate-blob" />
        <div className="absolute top-[20%] right-[-10%] w-[450px] h-[450px] bg-blue-500/25 rounded-full blur-[120px] animate-blob-delayed" />
        <div className="absolute bottom-[-10%] left-[30%] w-[400px] h-[400px] bg-fuchsia-500/20 rounded-full blur-[120px] animate-blob-delayed-2" />
        <div className="absolute top-[50%] left-[50%] w-[350px] h-[350px] bg-cyan-400/15 rounded-full blur-[100px] animate-blob" style={{ animationDelay: '8s' }} />
      </div>

      {/* Glass Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="glass-btn px-4 py-1.5 rounded-full">
              <span className="text-white font-bold text-lg tracking-tight">
                Renato<span className="text-purple-300">Frassa</span>
              </span>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-2">
            <button onClick={() => scrollTo('projects')} className="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/5">
              {t('nav.projects')}
            </button>
            <button onClick={() => scrollTo('about')} className="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/5">
              {t('nav.about')}
            </button>
            <button onClick={() => scrollTo('stack')} className="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/5">
              {t('nav.stack')}
            </button>
            <a
              href="https://github.com/frassa09"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-btn px-4 py-2 rounded-full text-sm text-white font-medium ml-2"
            >
              {t('nav.github')}
            </a>
            <LanguageToggle lang={lang} toggleLanguage={toggleLanguage} light />
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageToggle lang={lang} toggleLanguage={toggleLanguage} light />
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        {/* Hero */}
        <section className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-16">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection animation="fade-up">
              <div className="inline-flex items-center gap-2 glass-btn px-5 py-2 rounded-full mb-8">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm text-white/80">{t('hero.badge')}</span>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={100}>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight mb-6">
                <span className="glass-text px-2">{t('hero.title1')}</span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  {t('hero.title2')}
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <p className="text-lg sm:text-xl text-white/50 max-w-xl mx-auto leading-relaxed mb-10">
                {t('hero.subtitle')}
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => scrollTo('projects')}
                  className="glass-btn-solid px-8 py-3.5 rounded-full font-semibold text-sm"
                >
                  {t('hero.cta1')}
                </button>
                <a
                  href="https://github.com/frassa09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-btn px-8 py-3.5 rounded-full font-semibold text-sm text-white"
                >
                  {t('hero.cta2')}
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400}>
              <div className="mt-16 flex justify-center gap-6">
                <a
                  href="https://github.com/frassa09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-btn p-3 rounded-xl text-white/60 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="mailto:renatofrassa09@gmail.com"
                  className="glass-btn p-3 rounded-xl text-white/60 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-24 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <p className="text-sm text-purple-300/60 uppercase tracking-[0.2em] font-medium mb-3">{t('projects.badge')}</p>
                <h2 className="text-4xl sm:text-5xl font-bold text-white">{t('projects.title')}</h2>
                <p className="mt-4 text-white/40 max-w-lg mx-auto">{t('projects.subtitle')}</p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.keys(projectGradients).map((key, i) => (
                <AnimatedSection key={key} animation="fade-up" delay={i * 100}>
                  <Link
                    to={projectPaths[key]}
                    className="group glass-card rounded-2xl p-6 block transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10 hover:bg-white/15"
                  >
                    <div className={`h-36 rounded-xl bg-gradient-to-br ${projectGradients[key]} mb-5 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500`}>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                      <div className="absolute top-3 left-3 text-2xl">{projectIcons[key]}</div>
                    </div>
                    <div className="relative z-10">
                      <p className="text-xs text-white/40 uppercase tracking-wider mb-1">{t(`projects.items.${key}.subtitle`)}</p>
                      <h3 className="text-xl font-semibold text-white group-hover:text-purple-200 transition-colors mb-2 capitalize">
                        {key === 'crm' ? 'CRM Pro' : key === 'education' ? 'Horizon Academy' : key === 'restaurant' ? 'La Maison' : key === 'clothing' ? 'Maison' : 'DevForge'}
                      </h3>
                      <p className="text-sm text-white/40 leading-relaxed mb-4">{t(`projects.items.${key}.description`)}</p>
                      <div className="flex flex-wrap gap-2">
                        {t(`projects.items.${key}.tags`).map((tag, j) => (
                          <span key={j} className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-white/50 border border-white/5">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-24 px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection animation="fade-up">
              <div className="glass-card rounded-3xl p-8 sm:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                  <div>
                    <p className="text-sm text-purple-300/60 uppercase tracking-[0.2em] font-medium mb-3">{t('about.badge')}</p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">{t('about.title')}</h2>
                    <div className="space-y-4 text-white/50 leading-relaxed">
                      <p>{t('about.p1')}</p>
                      <p>{t('about.p2')}</p>
                      <p>{t('about.p3')}</p>
                    </div>
                    <div className="mt-8 flex flex-col sm:flex-row gap-3">
                      <a href="https://github.com/frassa09" target="_blank" rel="noopener noreferrer" className="glass-btn px-6 py-3 rounded-full text-sm font-medium text-white inline-flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        {t('about.github')}
                      </a>
                      <a href="mailto:renatofrassa09@gmail.com" className="glass-btn px-6 py-3 rounded-full text-sm font-medium text-white inline-flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        {t('about.email')}
                      </a>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent" />
                      <div className="text-center relative z-10">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 to-cyan-400 flex items-center justify-center text-4xl font-bold text-white mx-auto mb-4 shadow-lg shadow-purple-500/20">
                          RF
                        </div>
                        <p className="text-white font-semibold text-lg">Renato Frassa</p>
                        <p className="text-white/40 text-sm mt-1">{t('about.role')}</p>
                      </div>
                    </div>
                    <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-purple-500/20 rounded-full blur-xl" />
                    <div className="absolute -top-3 -left-3 w-16 h-16 bg-cyan-500/20 rounded-full blur-xl" />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Tech Stack */}
        <section id="stack" className="py-24 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-12">
                <p className="text-sm text-purple-300/60 uppercase tracking-[0.2em] font-medium mb-3">{t('stack.badge')}</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-white">{t('stack.title')}</h2>
              </div>
            </AnimatedSection>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {techStack.map((tech, i) => (
                <AnimatedSection key={i} animation="scale-up" delay={i * 80}>
                  <div className="glass-card rounded-2xl p-6 text-center group hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 relative z-10">
                    <div className="text-3xl mb-3">{tech.icon}</div>
                    <p className="text-sm font-medium text-white/80">{tech.name}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-24 px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <AnimatedSection animation="fade-up">
              <div className="glass-card rounded-3xl p-10 sm:p-14 relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t('contact.title')}</h2>
                <p className="text-white/40 mb-8 max-w-md mx-auto">{t('contact.subtitle')}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="mailto:renatofrassa09@gmail.com" className="glass-btn-solid px-8 py-3.5 rounded-full font-semibold text-sm inline-flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    {t('contact.email')}
                  </a>
                  <a href="https://github.com/frassa09" target="_blank" rel="noopener noreferrer" className="glass-btn px-8 py-3.5 rounded-full font-semibold text-sm text-white inline-flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 lg:px-8 border-t border-white/5">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-white/30 text-sm">
              © 2026 <span className="font-semibold text-white/50">Renato Frassa</span>. {t('footer.copyright')}
            </span>
            <div className="flex items-center gap-4">
              <a href="https://github.com/frassa09" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white/60 transition-colors text-sm">{t('footer.github')}</a>
              <a href="mailto:renatofrassa09@gmail.com" className="text-white/30 hover:text-white/60 transition-colors text-sm">{t('footer.email')}</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

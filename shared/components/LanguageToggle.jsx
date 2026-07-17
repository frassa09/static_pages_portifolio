export default function LanguageToggle({ lang, toggleLanguage, light = false }) {
  return (
    <button
      onClick={toggleLanguage}
      className={`
        flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold
        transition-all duration-300 hover:scale-105 active:scale-95
        ${light
          ? 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white border border-white/10'
          : 'glass-btn text-body hover:text-ink'
        }
      `}
      title={lang === 'en' ? 'Mudar para Português' : 'Switch to English'}
    >
      <span className="text-sm">{lang === 'en' ? '🇧🇷' : '🇺🇸'}</span>
      {lang === 'en' ? 'PT' : 'EN'}
    </button>
  )
}

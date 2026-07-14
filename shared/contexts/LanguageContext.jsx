import { createContext, useState, useCallback } from 'react'

export const LanguageContext = createContext()

export function LanguageProvider({ children, defaultLang = 'en' }) {
  const [lang, setLang] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('portfolio-lang') || defaultLang
    }
    return defaultLang
  })

  const toggleLanguage = useCallback(() => {
    setLang(prev => {
      const next = prev === 'en' ? 'pt' : 'en'
      localStorage.setItem('portfolio-lang', next)
      return next
    })
  }, [])

  const setLanguage = useCallback((newLang) => {
    setLang(newLang)
    localStorage.setItem('portfolio-lang', newLang)
  }, [])

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

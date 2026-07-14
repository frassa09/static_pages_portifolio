import { useContext } from 'react'
import { LanguageContext } from '../contexts/LanguageContext'

export default function useLanguage(translations) {
  const { lang, toggleLanguage, setLanguage } = useContext(LanguageContext)

  const t = (key, params = {}) => {
    const keys = key.split('.')
    let value = translations[lang]
    for (const k of keys) {
      value = value?.[k]
    }
    if (value === undefined || value === null) return key
    if (typeof value === 'number') return String(value)
    if (Array.isArray(value)) return value
    if (typeof value !== 'string') return key
    return value.replace(/\{(\w+)\}/g, (_, name) => params[name] ?? `{${name}}`)
  }

  return { t, lang, toggleLanguage, setLanguage, isPt: lang === 'pt', isEn: lang === 'en' }
}

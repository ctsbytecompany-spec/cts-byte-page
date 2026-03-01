import { createContext } from 'preact'
import { useContext, useState, useEffect } from 'preact/hooks'
import { translations, getStoredLanguage, setStoredLanguage } from '../translations.js'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => getStoredLanguage())

  useEffect(() => {
    setStoredLanguage(lang)
  }, [lang])

  const t = translations[lang] || translations.en

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}

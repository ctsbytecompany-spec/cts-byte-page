import { Link } from 'preact-router/match'
import { useLanguage } from '../context/LanguageContext.jsx'

export function Layout({ children }) {
  const { lang, setLang, t } = useLanguage()

  return (
    <>
      <header class="header">
        <div class="container header__content">
          <nav class="nav">
            <Link href="/" class="brand-name">
              CTS Byte
            </Link>
            <Link href="/wayzza-privacy" activeClassName="active">{t.navWayzzaPrivacy}</Link>
            <span class="lang-switcher">
              <button
                type="button"
                class={lang === 'en' ? 'lang-btn lang-btn--active' : 'lang-btn'}
                onClick={() => setLang('en')}
              >
                ENG
              </button>
              <button
                type="button"
                class={lang === 'pl' ? 'lang-btn lang-btn--active' : 'lang-btn'}
                onClick={() => setLang('pl')}
              >
                PL
              </button>
            </span>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer class="footer">
        <div class="container">
          <p>
            {t.footerCopyright}
            {' | '}
            <Link href="/wayzza-privacy">{t.footerWayzzaPrivacy}</Link>
          </p>
        </div>
      </footer>
    </>
  )
}

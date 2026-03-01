import { useEffect } from 'preact/hooks'
import { Layout } from '../components/Layout.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

export function WayzzaPrivacy() {
  const { lang, t } = useLanguage()

  useEffect(() => {
    document.title = t.wayzzaTitle
  }, [lang, t.wayzzaTitle])

  return (
    <Layout>
      <section class="section">
        <div class="container privacy-section">
          <h1>{t.wayzzaH1}</h1>
          <p><strong>{t.wayzzaLastUpdated}</strong></p>

          <h2>{t.wayzza1Title}</h2>
          <p>{t.wayzza1Intro}</p>
          <ul>
            <li><strong>{t.wayzza1Location}</strong> {t.wayzza1LocationDesc}</li>
            <li><strong>{t.wayzza1Route}</strong> {t.wayzza1RouteDesc}</li>
            <li><strong>{t.wayzza1Device}</strong> {t.wayzza1DeviceDesc}</li>
          </ul>
          <p><strong>{t.wayzza1Important}</strong> {t.wayzza1ImportantDesc}</p>

          <h2>{t.wayzza2Title}</h2>
          <ul>
            <li>{t.wayzza2Item1}</li>
            <li>{t.wayzza2Item2}</li>
            <li>{t.wayzza2Item3}</li>
            <li>{t.wayzza2Item4}</li>
          </ul>

          <h2>{t.wayzza3Title}</h2>
          <p>{t.wayzza3P1}</p>
          <p>{t.wayzza3P2}</p>

          <h2>{t.wayzza4Title}</h2>
          <p>{t.wayzza4Intro}</p>
          <ul>
            <li><strong>{t.wayzza4Loc}</strong> {t.wayzza4LocDesc}</li>
            <li><strong>{t.wayzza4Bg}</strong> {t.wayzza4BgDesc}</li>
          </ul>
          <p>{t.wayzza4Note}</p>

          <h2>{t.wayzza5Title}</h2>
          <p>{t.wayzza5P1}</p>
          <p>{t.wayzza5P2}</p>

          <h2>{t.wayzza6Title}</h2>
          <p>{t.wayzza6P}</p>

          <h2>{t.wayzza7Title}</h2>
          <ul>
            <li>{t.wayzza7Item1}</li>
            <li>{t.wayzza7Item2}</li>
            <li>{t.wayzza7Item3}</li>
          </ul>

          <h2>{t.wayzza8Title}</h2>
          <p>{t.wayzza8P}</p>

          <h2>{t.wayzza9Title}</h2>
          <p>{t.wayzza9P}</p>

          <h2>{t.wayzza10Title}</h2>
          <p>{t.wayzza10P}</p>
          <p>
            <strong>{t.wayzza10Email}</strong> <a href="mailto:ctsbytecompany@gmail.com">ctsbytecompany@gmail.com</a>
          </p>

          <hr style="margin: 40px 0; border: none; border-top: 1px solid var(--border);" />

          <p style="text-align: center; color: var(--muted); font-size: 14px;">
            {t.wayzzaFooter}
          </p>
        </div>
      </section>
    </Layout>
  )
}

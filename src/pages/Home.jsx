import { useEffect } from 'preact/hooks'
import { Layout } from '../components/Layout.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

export function Home() {
  const { lang, t } = useLanguage()

  useEffect(() => {
    document.title = t.homeTitle
  }, [lang, t.homeTitle])

  return (
    <Layout>
      <section class="hero">
        <div class="container wip-hero">
          <div class="wip-content">
            <h1>{t.homeHero}</h1>
          </div>
          <div class="wip-image">
            <img src="/assets/raccoon-builder_3.png" alt={t.homeHeroAlt} />
          </div>
        </div>
        <div class="container">
          <h2>{t.homeContact}</h2>
          <p class="lead">
            {t.homeContactLead}
          </p>

          <p class="lead" style="margin-bottom: 40px;">
            {t.homeContactEmail} <a href="mailto:ctsbytecompany@gmail.com">ctsbytecompany@gmail.com</a>
          </p>
        </div>
      </section>
    </Layout>
  )
}

import { render } from 'preact'
import './index.css'
import { LanguageProvider } from './context/LanguageContext.jsx'
import { App } from './App.jsx'

render(
  <LanguageProvider>
    <App />
  </LanguageProvider>,
  document.getElementById('app')
)

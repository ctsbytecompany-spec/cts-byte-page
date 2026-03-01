import Router from 'preact-router'
import { Home } from './pages/Home.jsx'
import { WayzzaPrivacy } from './pages/WayzzaPrivacy.jsx'

export function App() {
  return (
    <Router>
      <Home path="/" />
      <WayzzaPrivacy path="/wayzza-privacy" />
    </Router>
  )
}

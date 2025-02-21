import './App.css'
import { Router } from './Router.jsx'
import Page404 from './pages/404.jsx'
import SearchPage from './pages/Seach.jsx'
import { Route } from './Route.jsx'
import HomePage from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'

const appRoutes = [
  {
    path: '/search/:query',
    Component: SearchPage 
  }
]


function App() {

  return (
    <main>
      <Router routes={appRoutes} defaultComponent={Page404}>
        <Route path='/' Component={HomePage} />
        <Route path='/about' Component={AboutPage} />
      </Router>
    </main>
  )
}

export default App

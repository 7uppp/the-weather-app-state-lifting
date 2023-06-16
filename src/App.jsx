import HeroBackground from './components/HeroBackground'
import WeatherCard from './components/WeatherCard/WeatherCard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <HeroBackground>
      <div className="h-screen flex justify-center items-center">
        <Router>
          <Routes>
            <Route path="/" element={<WeatherCard />} />
          </Routes>
        </Router>
      </div>
    </HeroBackground>
  )
}

export default App

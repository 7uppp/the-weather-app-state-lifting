import BackgroundImage from './components/backgroundImage/'
import WeatherCard from './components/weatherCard/WeatherCard'
import { WeatherProvider } from './context/WeatherContext'
import img from './img/hero-pattern.jpg'

function App() {
  return (
    <WeatherProvider>
      <BackgroundImage img={img}>
        <div className="h-screen flex justify-center items-center">
          <WeatherCard />
        </div>
      </BackgroundImage>
    </WeatherProvider>
  )
}

export default App

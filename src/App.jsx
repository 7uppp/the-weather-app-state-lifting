import BackgroundImage from './components/backgroundImage/'
import img from './img/hero-pattern.jpg'
import WeatherCard from './components/WeatherCard/WeatherCard'

function App() {
  return (
    <BackgroundImage img={img}>
      <div className="h-screen flex justify-center items-center">
        <WeatherCard />
      </div>
    </BackgroundImage>
  )
}

export default App

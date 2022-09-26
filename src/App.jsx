import axios from 'axios';
import { useEffect, useState } from 'react'
import './App.css'
import BoxWeather from './components/BoxWeather';
import Loading from './components/Loading';

function App() {

  const [coords, setCoords] = useState()
  const [info, setInfo] = useState()
  const [celFar, setCelFar] = useState("°C")
  const [temp, setTemp] = useState("°F")
  


  useEffect(() => {
    const succes = pos => {
      const obj = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      }
      setCoords(obj)
    }
    navigator.geolocation.getCurrentPosition(succes)
    
  }, [])
  
  console.log(info);

  setTimeout(useEffect(() => {
    if(coords){
      const APIKEY = "6aab9ecca65a4aa503faee711ffc8c10"
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKEY}`

      axios.get(URL)
        .then(res => setInfo(res.data))
        .catch(err => console.log(err))
    }
  
  }, [coords]), "2000")


  const handleTemp = () => {
    if(celFar === "°C"){
      setCelFar("°F")
      setTemp("°C")
    }else if(celFar === "°F"){
      setCelFar("°C")
      setTemp("°F")
    }
  }


  return (
    <div className="App">
      {info ?
        <BoxWeather 
          info={info}
          temp = {celFar}
          changeTemp = {handleTemp}
          nexTemp = {temp}
        />
      :
        <Loading />
      }
    </div>
  )
}

export default App

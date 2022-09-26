import React from 'react'
import "./boxWeather.css"

const BoxWeather = ({info, temp, changeTemp, nexTemp}) => {
  return (
    <div className='weather__box'>
        <div className="weather__country">
            <h1>{`${info?.name}, ${info?.sys.country}`}</h1>
        </div>
        <div className="weather__info">

            <section className="weather__temp">

                <div className="weather__icon">
                    <img src={`http://openweathermap.org/img/wn/${info?.weather[0].icon}.png`} alt="icon" />
                </div>
                <div className="temp__change">
                    <h3 className='temp__change__item'>{
                        temp === "°C"    ?
                            `${Math.round(info?.main.temp - 273)} °C`
                        :
                            `${Math.round(1.8 * (info?.main.temp - 273) + 32)} °F`
                    }</h3>
                    <button className='btn temp__change__item' onClick={changeTemp}>{nexTemp}</button>
                    
                </div>
            </section>

            <section className="weather__restInfo">
                <div className="weather__info_item">
                    <h3>{`"${info?.weather[0].description}"`}</h3>
                </div>
                <div className="weather__info_item">
                    <h3>Wind Speed: <span className='values__weather'>{info?.wind.speed} m/s</span></h3>
                </div>
                <div className="weather__info_item">
                    <h3>Clouds: <span className='values__weather'>{info?.clouds.all}%</span></h3>
                </div>
                <div className="weather__info_item">
                    <h3>Pressure: <span className='values__weather'>{info?.main.pressure} mb</span></h3>
                </div>
            </section>

            
        </div>
        
    </div>
  )
}

export default BoxWeather
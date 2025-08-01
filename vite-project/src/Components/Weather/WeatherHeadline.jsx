import {useContext} from 'react'
import {WeatherContext} from "../../Context"
import cloud from '../../assets/cloud.svg'
import hi from '../../assets/haze.svg'
import snow from '../../assets/icons/snow.svg'
import sunny from '../../assets/icons/sunny.svg'
import rain from '../../assets/rainy.svg'
import thun from '../../assets/thunder.svg'
import pin from '../../assets/pin.svg'
import { getFormattedDate } from '../../utils/date-utils';


export default function WeatherHeadline() {
	const {weatherData} = useContext(WeatherContext);
	const {climate,location,temperature,time} = weatherData;

	function getWeatherIcon(climate) {
		 switch (climate) {
					case "Rain":
						return rain;
					case "Clouds":
						return cloud;
					case "Clear":
						return sunny;
					case "Snow":
						return snow;
					case "Thunder":
						return thun;
					case "Fog":
						return hi;
					case "Haze":
						return hi;
					case "Mist":
						return hi;
		
					default:
						return sunny;
				}
	}
  return (
    <>
      <div>
							<div className="max-md:flex items-center justify-between md:-mt-10">
								<img src= {getWeatherIcon(climate)} alt="cloud" />
								<div className="max-md:flex items-center max-md:space-x-4">
									<h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">{Math.round(temperature)}°</h1>
									<div className="flex items-center space-x-4 md:mb-4">
										<img src={pin} />
										<h2 className="text-2xl lg:text-[50px]">{location}</h2>
									</div>
								</div>
							</div>
							<p className="text-sm lg:text-lg">{getFormattedDate(time,"time",false)} - {getFormattedDate(time,"date",false)}</p>
						</div>
    </>
  )
}

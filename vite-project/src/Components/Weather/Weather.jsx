

import AddToFavourite from './AddToFavourite';
import WeatherHeadline from './WeatherHeadline';
import WeatherCondition from './WeatherCondition';


// import { useWeather } from '../../Hooks';

export default function Weather() {
	
	// const {loading,error,weatherData} = useWeather();

	// console.log(weatherData,loading,error);
	// if (loading.state) {
	// 	return <div className="text-white text-center mt-10">{loading.message}</div>;
	// }

	// if (error) {
	// 	return <div className="text-red-400 text-center mt-10">Error: {error.message}</div>;
	// }
  return (
    
      <div className="center:true p-20">
				<div className="grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/[14%] px-4 lg:px-14 py-6 lg:py-10 min-h-[520px] max-w-[1058px] mx-auto">
					<div className="grid md:grid-cols-2 gap-10 md:gap-6">
						
							
                            <AddToFavourite/>
						    <WeatherHeadline/>
						    <WeatherCondition/>

							
							
					</div>
				</div>
				
		</div>
    
  )
}

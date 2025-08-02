import Page from './Page';
import {WeatherProvider,FavouriteProvider,LocationProvider} from './Provider';

export default function App() {
  return (
    <>
    <LocationProvider>
      <WeatherProvider>
        <FavouriteProvider>
          <Page/>
        </FavouriteProvider>
      </WeatherProvider>
    </LocationProvider>  
    </>
  )
}

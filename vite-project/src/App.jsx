import React from 'react'
import Header from './Components/Header/Header'
import Weather from './Components/Weather/Weather'

import {WeatherProvider,FavouriteProvider} from './Provider';

export default function App() {
  return (
    <>
    <WeatherProvider>
      <FavouriteProvider>
      <Header/>
      <main className="mt-7">
        <section>
          <Weather/>
        </section>
      </main>
      </FavouriteProvider>
    </WeatherProvider>  
    </>
  )
}

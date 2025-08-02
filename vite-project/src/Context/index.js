import {createContext} from 'react'


const WeatherContext = createContext({});
const FavouriteContext = createContext(null);
const LocationContext = createContext("")

export {WeatherContext,FavouriteContext,LocationContext};
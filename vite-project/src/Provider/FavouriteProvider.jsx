import { FavouriteContext } from "../Context";
import useLocalStorage from './../Hooks/useLocalStorage';

const FavouriteProvider = ({children}) => {
    const [favourites,setFavourites] = useLocalStorage("favourites",[])

    // const addToFavourites = (latitude,longitude,location) => {
    //     setFavourites([
    //         ...favourites,
    //         {latitude:latitude, longitude:longitude, location:location}
    //     ]);
    // };
    const addToFavourites = (latitude, longitude, location) => {
  if (!location) {
    console.warn("Location is missing, not adding to favourites.");
    return;
  }

  const alreadyAdded = favourites.some(fav => fav.location === location);
  if (alreadyAdded) {
    console.info("Location already in favourites.");
    return;
  }

  const newFavourite = { latitude, longitude, location };
  setFavourites([...favourites, newFavourite]);

  console.log("Added to favourites:", newFavourite);
};


    const removeFromFavourites = (location) => {
        const restFavourites = favourites.filter(
            (fav) => fav.location !== location
        );
        setFavourites(restFavourites);
        console.log("Removed from favourites:", location);
    }

    return(
        <FavouriteContext.Provider value={{addToFavourites,removeFromFavourites,favourites}}>
         {children}
        </FavouriteContext.Provider>
        
    );
};

export default FavouriteProvider

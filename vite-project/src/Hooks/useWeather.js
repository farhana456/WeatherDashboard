import { useState, useEffect } from 'react';

const useWeather = () => {
    const [weatherData, setWeatherData] = useState({
        location: "",
        climate: "",
        temperature: "",
        maxTemperature: "",
        minTemperature: "",
        humidity: "",
        cloudPercentage: "",
        wind: "",
        time: "",
        longitude: "",
        latitude: ""
    });
    const [loading, setLoading] = useState({
        state: false,
        message: "",
    });

    const [error, setError] = useState(null);

    const fetchWeather = async (latitude, longitude) => {
        try {
            setLoading({
                state: true,
                message: "Fetching weather data......",
            });

            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`;
            console.log("API KEY:", import.meta.env.VITE_WEATHER_API_KEY);
            console.log("Fetching from URL:", url);

            const response = await fetch(url, { cache: "no-store" });

            if (!response.ok) {
                const errorMessage = `Fetching weather data failed: ${response.status}`;
                throw new Error(errorMessage);
            }

            const data = await response.json();
            console.log("API থেকে পাওয়া ডেটা:", data);

            setWeatherData({
                location: data?.name || "",
                climate: data?.weather?.[0]?.main || "",
                temperature: data?.main?.temp || "",
                maxTemperature: data?.main?.temp_max || "",
                minTemperature: data?.main?.temp_min || "",
                humidity: data?.main?.humidity || "",
                cloudPercentage: data?.clouds?.all || "",
                wind: data?.wind?.speed || "",
                // time: new Date(data?.dt * 1000).toLocaleTimeString() || "",
                time: data?.dt || 0,
                longitude,
                latitude,
            });

            setError(null);
        } catch (err) {
            console.error("Error fetching weather:", err);
            setError(err);
        } finally {
            setLoading({
                state: false,
                message: ""
            });
        }
    };

    useEffect(() => {
        setLoading({
            state: true,
            message: "Finding location......"
        });

        navigator.geolocation.getCurrentPosition(function (position) {
            fetchWeather(position.coords.latitude, position.coords.longitude);
        }, (err) => {
            setError(err);
            setLoading({ state: false, message: "" });
        });
    }, []);

     useEffect(() => {
        console.log("Updated weatherData:", weatherData);
    }, [weatherData]);

    return {
        weatherData,
        error,
        loading
    };
};

export default useWeather;

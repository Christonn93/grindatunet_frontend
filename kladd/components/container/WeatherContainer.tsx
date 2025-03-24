import { CurrentWeatherCard } from "../card/weather/CurrentWeatherCard";
import { PrecipitationCard } from "../card/weather/PrecipitationCard";
import { useWeatherForecast } from "@/hooks/handlers/useWeatherForecast";

export const WeatherContainer = () => {
 const { weather, isLoading, error } = useWeatherForecast();

 if (isLoading) return <p>Loading weather data...</p>;
 if (error) return <p>Error fetching weather data: {error?.message}</p>;
 if (!weather) return <p>No weather data available</p>;

 return (
  <div className="flex flex-col gap-4 p-6">
   <CurrentWeatherCard
    temp={weather.temp}
    feelsLike={weather.feelsLike}
    precipitation={weather.precipitation}
    windSpeed={weather.windSpeed}
    windDirection={weather.windDirection}
    symbol={weather.symbol}
   />
   <PrecipitationCard message={weather.precipitationMessage} />
  </div>
 );
};

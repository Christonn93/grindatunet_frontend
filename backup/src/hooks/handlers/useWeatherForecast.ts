import { useWeather } from "../query/useWeather";

export const useWeatherForecast = () => {
 const { data, isLoading, error } = useWeather();

 if (!data) return { data: null, isLoading, error };

 const dataValues = data.properties;
 const timeseries = dataValues.timeseries[0]?.data;

 return {
  weather: {
   temp: timeseries?.instant.details.air_temperature || 0,
   feelsLike: (timeseries?.instant.details.air_temperature || 0) - 2,
   precipitation: timeseries?.next_1_hours?.details?.precipitation_amount || 0,
   windSpeed: timeseries?.instant.details.wind_speed || 0,
   windDirection: timeseries?.instant.details.wind_from_direction || 0,
   symbol: timeseries?.next_1_hours?.summary.symbol_code || "",
   precipitationMessage: (timeseries?.next_1_hours?.details?.precipitation_amount || 0) > 0 ? "Det blir regn de neste 90 minuttene" : "Det blir opphold neste 90 minutter",
  },
  isLoading,
  error,
 };
};

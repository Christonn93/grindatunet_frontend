import { useWeather } from "@/hooks/query/useWeather";
import { WeatherForecastCard } from "../card/WeatherForecastCard";
import { WeatherNowCard } from "../card/WeatherNowCard";
import { BaseContainer } from "./BaseContainer";
import { Loading } from "../loading/Loading";
import { FetchErrorAlert } from "../notification/FetchErrorAlert";
import { SmallHeading } from "../text/SmallHeading";

export const WeatherContainer = () => {
 const { data, isLoading, error } = useWeather();

 if (isLoading) return <Loading />;
 if (error) return <FetchErrorAlert message={String(error.message)} />;
 if (!data) return <p>No weather data available</p>;

 const timeseries = data.properties.timeseries[0];
 const details = timeseries.data.instant.details;

 const temp = details.air_temperature || 0;
 const feelsLike = temp - 2; // placeholder logic
 const precipitation = timeseries.data.next_1_hours?.details?.precipitation_amount || 0;
 const windSpeed = details.wind_speed || 0;
 const windDirection = details.wind_from_direction || 0;
 const symbol = timeseries.data.next_1_hours.summary.symbol_code;

 const precipitationMessage = precipitation > 0 ? "Det blir regn de neste 90 minuttene" : "Det blir opphold neste 90 minutter";

 return (
  <BaseContainer>
   <div className="mb-4">
    <SmallHeading text="Hytte været" />
   </div>
   <WeatherNowCard temp={temp} feelsLike={feelsLike} precipitation={precipitation} windSpeed={windSpeed} windDirection={windDirection} symbol={symbol} />
   <WeatherForecastCard message={precipitationMessage} />
  </BaseContainer>
 );
};

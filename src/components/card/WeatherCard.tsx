import { useWeather } from "@/hooks/query/useWeather";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { WeatherIconSwitch } from "../icons/WeatherIconSwitch";
import { Thermometer, Umbrella, Wind, Info, Clock } from "lucide-react";
import { WeatherButton } from "../buttons/WeatherButton";

export const WeatherCard = () => {
 const { data, isLoading, error } = useWeather();

 if (isLoading) return <p>Loading weather data...</p>;
 if (error) return <p>Error fetching weather data: {error.message}</p>;
 if (!data) return <p>No weather data available</p>;

 const dataValues = data.properties;

 // Extracting key weather details
 const temp = dataValues.timeseries[0].data.instant.details.air_temperature || 0;
 const feelsLike = temp - 2; // Mocking a "feels like" temp (You may replace with actual API data)
 const precipitation = dataValues.timeseries[0].data.next_1_hours.details?.precipitation_amount || 0;
 const windSpeed = dataValues.timeseries[0].data.instant.details.wind_speed || 0;
 const windDirection = dataValues.timeseries[0].data.instant.details.wind_from_direction || 0;
 const symbol = dataValues.timeseries[0].data.next_1_hours.summary.symbol_code;

 // Mock precipitation forecast message (Replace with actual API logic if available)
 const precipitationMessage = precipitation > 0 ? `Det blir regn de neste 90 minuttene` : `Det blir opphold neste 90 minutter`;

 return (
  <div className="flex flex-col justify-center gap-4 p-6 rounded-xl">
   <Card className="shadow-md border border-gray-200 p-4 rounded-xl flex-1">
    <CardHeader className="flex items-center gap-2">
     <CardTitle className="text-lg font-bold">
      <Clock size={16} /> Været nå
     </CardTitle>
    </CardHeader>
    <CardContent className="flex items-center gap-4">
     <WeatherIconSwitch symbolCode={symbol} />
     <div className="flex flex-col">
      <p className="text-2xl font-semibold flex items-center gap-1">
       <Thermometer size={18} /> {temp}° <span className="text-gray-500 text-sm">Føles som {feelsLike}°</span>
      </p>
      <p className="text-lg text-blue-600 flex items-center gap-1">
       <Umbrella size={18} /> {precipitation} mm
      </p>
      <p className="text-lg flex items-center gap-1">
       <Wind size={18} /> {windSpeed} m/s <span className="text-gray-500">({windDirection}°)</span>
      </p>
     </div>
     <WeatherButton />
    </CardContent>
   </Card>
   <Card className="shadow-md border border-gray-200 p-4 rounded-xl w-64 flex-1">
    <CardHeader className="flex items-center gap-2">
     <Umbrella size={16} />
     <CardTitle className="text-md font-bold">Nedbørvarsel</CardTitle>
     <Info size={16} className="ml-auto text-gray-500" />
    </CardHeader>
    <CardContent>
     <p className="text-gray-700">{precipitationMessage}</p>
    </CardContent>
   </Card>
  </div>
 );
};

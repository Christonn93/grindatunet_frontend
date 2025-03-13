import { Clock, Thermometer, Umbrella, Wind } from "lucide-react";
import { WeatherIconSwitch } from "@/components/icons/WeatherIconSwitch";
import { WeatherButton } from "@/components/buttons/WeatherButton";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

type WeatherProps = {
 temp: number;
 feelsLike: number;
 precipitation: number;
 windSpeed: number;
 windDirection: number;
 symbol: string;
};

export const CurrentWeatherCard = ({ temp, feelsLike, precipitation, windSpeed, windDirection, symbol }: WeatherProps) => {
 return (
  <Card className="shadow-md border border-gray-200 p-4 rounded-xl flex-1 bg-white">
   <CardHeader className="flex items-center gap-2">
    <CardTitle className="text-lg font-bold flex items-center gap-1">
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
   </CardContent>
   <CardFooter>
    <WeatherButton />
   </CardFooter>
  </Card>
 );
};

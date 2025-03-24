import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Thermometer, Umbrella, Wind, Clock } from "lucide-react";
import { WeatherIconSwitch } from "../icon/WeatherIconSwitch";
import { WeatherButton } from "../button/WeatherButton";

type WeatherNowCardProps = {
 temp: number;
 feelsLike: number;
 precipitation: number;
 windSpeed: number;
 windDirection: number;
 symbol: string;
};

export const WeatherNowCard = ({ temp, feelsLike, precipitation, windSpeed, windDirection, symbol }: WeatherNowCardProps) => {
 return (
  <div className="shadow border border-gray-200 p-4 rounded flex-1 space-y-4 bg-white">
   <CardHeader>
    <div className="flex items-center justify-between">
     <CardTitle className="text-lg font-bold flex items-center gap-2">
      <Clock size={16} /> Været nå
     </CardTitle>
     <WeatherButton />
    </div>
   </CardHeader>
   <CardContent className="flex items-center gap-4">
    <WeatherIconSwitch symbolCode={symbol} />
    <div className="flex flex-col">
     <p className="text-2xl font-semibold flex items-center gap-1">
      <Thermometer size={18} /> {temp}°<span className="text-gray-500 text-sm ml-2">Føles som {feelsLike}°</span>
     </p>
     <p className="text-lg text-blue-600 flex items-center gap-1">
      <Umbrella size={18} /> {precipitation} mm
     </p>
     <p className="text-lg flex items-center gap-1">
      <Wind size={18} /> {windSpeed} m/s <span className="text-gray-500">({windDirection}°)</span>
     </p>
    </div>
   </CardContent>
  </div>
 );
};

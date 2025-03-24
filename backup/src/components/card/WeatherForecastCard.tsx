import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Umbrella, Info } from "lucide-react";

type WeatherForecastCardProps = {
 message: string;
};

export const WeatherForecastCard = ({ message }: WeatherForecastCardProps) => {
 return (
  <div className="shadow border border-gray-200 p-4 rounded flex-1 space-y-4 bg-white">
   <CardHeader className="flex items-center gap-2">
    <CardTitle className="text-lg font-bold flex items-center gap-2">
     <Umbrella size={16} />
     Nedbørvarsel
     <Info size={16} className="ml-auto text-gray-500" />
    </CardTitle>
   </CardHeader>
   <CardContent>
    <p className="text-gray-700">{message}</p>
   </CardContent>
  </div>
 );
};

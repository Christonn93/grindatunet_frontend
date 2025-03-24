import { Sun, Cloud, CloudRain, CloudSnow, CloudSun, CloudLightning, CloudFog, CloudDrizzle } from "lucide-react";

const weatherIconMap: Record<string, React.ReactNode> = {
 clear_day: <Sun size={24} />,
 partlycloudy_day: <CloudSun size={24} />,
 cloudy: <Cloud size={24} />,
 rain: <CloudRain size={24} />,
 snow: <CloudSnow size={24} />,
 thunderstorm: <CloudLightning size={24} />,
 fog: <CloudFog size={24} />,
 drizzle: <CloudDrizzle size={24} />,
 default: <Cloud size={24} />,
};

type WeatherIconSwitchProps = {
 symbolCode: string;
};

export const WeatherIconSwitch = ({ symbolCode }: WeatherIconSwitchProps) => {
 return <div>{weatherIconMap[symbolCode] || weatherIconMap.default}</div>;
};

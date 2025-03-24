import { Button } from "../ui/button";

export const WeatherButton = () => {
 // Yr Weather URL
 const yrWeatherUrl = "https://www.yr.no/nb/v%C3%A6rvarsel/daglig-tabell/10-998368/Norge/Oslo/Oslo/L%C3%B8nn%C3%A5sveien";

 return (
  <Button variant="outline" className="ml-4" onClick={() => window.open(yrWeatherUrl, "_blank", "noopener,noreferrer")}>
   Sjekk Yr
  </Button>
 );
};

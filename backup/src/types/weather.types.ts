export type WeatherUnits = {
 air_pressure_at_sea_level: string;
 air_temperature: string;
 cloud_area_fraction: string;
 precipitation_amount: string;
 relative_humidity: string;
 wind_from_direction: string;
 wind_speed: string;
};

export type WeatherMeta = {
 updated_at: string;
 units: WeatherUnits;
};

export type InstantDetails = {
 air_pressure_at_sea_level: number;
 air_temperature: number;
 cloud_area_fraction: number;
 relative_humidity: number;
 wind_from_direction: number;
 wind_speed: number;
};

export type WeatherSummary = {
 symbol_code: string;
};

export type NextHourDetails = {
 precipitation_amount: number;
};

export type WeatherData = {
 instant: {
  details: InstantDetails;
 };
 next_12_hours?: {
  summary: WeatherSummary;
  details?: Record<string, unknown>;
 };
 next_1_hours?: {
  summary: WeatherSummary;
  details: NextHourDetails;
 };
 next_6_hours?: {
  summary: WeatherSummary;
  details: NextHourDetails;
 };
};

export type WeatherTimeSeries = {
 time: string;
 data: WeatherData;
};

export type WeatherResponse = {
 meta: WeatherMeta;
 timeseries: WeatherTimeSeries[];
};

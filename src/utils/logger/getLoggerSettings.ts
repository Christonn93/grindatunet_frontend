import { defaultSettings, LoggerSettings } from "./loggerSettings";

export const getLoggerSettings = (): LoggerSettings => {
 const storedSettings = localStorage.getItem("loggerSettings");
 const settings = storedSettings ? (JSON.parse(storedSettings) as LoggerSettings) : defaultSettings;

 return settings;
};

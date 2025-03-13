import { loggerEmojis } from "@/utils/logger/loggerEmojis";
import { defaultSettings, LoggerSettings } from "@/utils/logger/loggerSettings";

export const loggerSettings = async () => {
 try {
  const response = await fetch("./logger/loggerSettings");
  const settings = (await response.json()) as LoggerSettings;
  localStorage.setItem("loggerSettings", JSON.stringify(settings));
  return settings;
 } catch (error) {
  console.warn(`${loggerEmojis.warning} Failed to fetch logger settings, using defaults.`, error);
  return defaultSettings;
 }
};

import { loggerSettings } from "@/service/utils/logger.service";
import { loggerEmojis } from "./loggerEmojis";
import { LogLevel } from "./loggerSettings";
import { logMessage } from "./logMessage";

const LOG_STORAGE_KEY = "console_logs";

export const logger = {
 async init() {
  const settings = await loggerSettings();
  localStorage.setItem("loggerSettings", JSON.stringify(settings));
 },

 info: (message: string, data?: unknown) => {
  logMessage("info", message, data);
 },
 error: (message: string, data?: unknown) => {
  logMessage("error", message, data);
 },
 warn: (message: string, data?: unknown) => {
  logMessage("warn", message, data);
 },
 debug: (message: string, data?: unknown) => {
  logMessage("debug", message, data);
 },
 log: (level: LogLevel, message: string, data?: unknown) => {
  logMessage(level, message, data);
 },
 apiResponse: (url: string, data: unknown, status: "active" | "inactive" | "pending" = "active") => {
  logger.info(`${loggerEmojis.status[status]} [API Response] ${url}`, data);
 },
 apiError: (url: string, error: unknown, status: "active" | "inactive" | "pending" = "inactive") => {
  logger.error(`${loggerEmojis.status[status]} [API Error] ${url}`, error);
 },

 downloadLogs: () => {
  const logs = JSON.parse(localStorage.getItem(LOG_STORAGE_KEY) ?? "[]") as string[];
  if (logs.length === 0) {
   console.warn("No logs to download.");
   return;
  }

  const logBlob = new Blob([logs.join("\n")], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(logBlob);
  link.download = `console_logs_${new Date().toISOString()}.txt`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
 },

 clearLogs: () => {
  localStorage.removeItem(LOG_STORAGE_KEY);
  console.log("Console logs cleared.");
 },
};

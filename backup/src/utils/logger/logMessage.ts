import { getLoggerSettings } from "./getLoggerSettings";
import { loggerEmojis } from "./loggerEmojis";
import { LogLevel } from "./loggerSettings";
import { saveLog } from "./saveLog";

export const logMessage = (level: LogLevel, message: string, data?: unknown) => {
 const settings = getLoggerSettings();
 if (!settings.loggingEnabled || !settings.levels[level]) return;

 const timestamp = new Date().toISOString();
 const formattedMessage = `${loggerEmojis[level]} [${timestamp}] [${level.toUpperCase()}] ${message}`;

 const stackTrace = new Error().stack;
 const stackLines = stackTrace?.split("\n");

 let callerFilePath = stackLines?.[3]?.trim();

 if (callerFilePath) {
  const srcIndex = callerFilePath.indexOf("/src");
  if (srcIndex !== -1) {
   callerFilePath = callerFilePath.substring(srcIndex);
  }
 }

 if (level === "error" && data) {
  const dataFormatted = JSON.stringify(data, null, 2);
  const log = `${formattedMessage} [File: ${callerFilePath ?? "unknown"}] \n   "data": ${dataFormatted}`;
  saveLog(log, level);
 } else {
  saveLog(formattedMessage + (data ? ` {${JSON.stringify(data)}}` : "") + (callerFilePath ? ` [File: ${callerFilePath}]` : ""), level);
 }

 console[level](formattedMessage + (callerFilePath ? ` [File: ${callerFilePath}]` : ""), data || "");
};

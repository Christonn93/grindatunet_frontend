import { LogLevel } from "./loggerSettings";
import { LogLevel as levelLog } from "./logLevel";

const LOG_STORAGE_KEY = "console_logs";
export const saveLog = (log: string, level: LogLevel) => {
 if (level !== levelLog.Error) return;
 const logs: string[] = JSON.parse(localStorage.getItem(LOG_STORAGE_KEY) ?? "[]") as string[];
 logs.push(log);
 localStorage.setItem(LOG_STORAGE_KEY, JSON.stringify(logs));
};

export type LogLevel = "info" | "error" | "warn" | "debug";

export type LoggerSettings = {
 loggingEnabled: boolean;
 levels: Record<LogLevel, boolean>;
};

const isDebug = import.meta.env.VITE_DEBUG === "true";

export const defaultSettings: LoggerSettings = {
 loggingEnabled: isDebug,
 levels: {
  info: isDebug,
  error: true,
  warn: isDebug,
  debug: isDebug,
 },
};

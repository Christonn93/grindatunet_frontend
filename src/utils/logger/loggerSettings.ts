export type LogLevel = "info" | "error" | "warn" | "debug";

export type LoggerSettings = {
 loggingEnabled: boolean;
 levels: Record<LogLevel, boolean>;
};

export const defaultSettings: LoggerSettings = {
 loggingEnabled: true,
 levels: {
  info: true,
  error: true,
  warn: true,
  debug: false,
 },
};

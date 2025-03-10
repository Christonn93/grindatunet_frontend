export const LogLevel = {
 Error: "error",
 Warning: "warning",
 Info: "info",
 Debug: "debug",
} as const;

export type LogLevel = (typeof LogLevel)[keyof typeof LogLevel];

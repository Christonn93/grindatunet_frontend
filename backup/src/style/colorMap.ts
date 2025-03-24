export type ColorMapKey = "default" | "active" | "red";

export const colorMap: Record<ColorMapKey, string> = {
 default: "text-orange-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500",
 active: "text-blue-600 dark:text-blue-500",
 red: "text-red-500 dark:text-red-400 group-hover:text-red-600",
};

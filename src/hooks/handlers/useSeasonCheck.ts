export const useSeasonCheck = () => {
 const isWinterSeason = (date: Date) => {
  const month = date.getMonth() + 1; // getMonth() is zero-based
  return month >= 11 || month <= 4;
 };
 return { isWinterSeason };
};

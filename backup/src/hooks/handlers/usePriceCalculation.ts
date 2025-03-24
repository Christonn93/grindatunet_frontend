import { useBookingStore } from "../store/useBookingStore";
import { useSeasonCheck } from "./useSeasonCheck";

export const usePriceCalculation = () => {
 const { startDate, endDate } = useBookingStore();
 const { isWinterSeason } = useSeasonCheck();

 const calculatePrice = () => {
  if (!startDate || !endDate) return 0;

  const weekendRateWinter = 900;
  const weekendRateSummer = 750;
  const dailyRate = 200;
  let totalCost = 0;

  const currentDate = new Date(startDate);
  while (currentDate <= endDate) {
   const isWeekend = currentDate.getDay() === 5 || currentDate.getDay() === 6; // Friday or Saturday
   const winterSeason = isWinterSeason(currentDate);

   if (isWeekend) {
    totalCost += winterSeason ? weekendRateWinter : weekendRateSummer;
   } else {
    totalCost += dailyRate;
   }

   currentDate.setDate(currentDate.getDate() + 1);
  }
  return totalCost;
 };
 return { calculatePrice };
};

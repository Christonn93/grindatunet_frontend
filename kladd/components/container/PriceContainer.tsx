import { useBooking } from "@/hooks/handlers/useBooking";

export const PriceContainer = () => {
 const { calculatePrice } = useBooking();
 return (
  <div className=" space-y-4 border-l pl-6">
   <h3 className="text-xl font-bold">Total Price: {calculatePrice()} NOK</h3>
  </div>
 );
};

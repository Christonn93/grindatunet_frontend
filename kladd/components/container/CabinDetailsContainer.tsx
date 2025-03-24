import { BookingDialog } from "../dialog/BookingDialog";

export const CabinDetailsContainer = () => {
 return (
  <div className="p-6">
   <h1 className="text-2xl font-bold">Cabin Overview</h1>
   <p className="mt-2 text-gray-600">Check availability and book your stay.</p>
   <BookingDialog />
  </div>
 );
};

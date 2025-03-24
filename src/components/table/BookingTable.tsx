import { useBookings } from "@/hooks/query/booking/useBookings";
import { AlertTriangle } from "lucide-react";

export const BookingTable = () => {
 const { data: bookings, isLoading, isError } = useBookings();

 if (isLoading) {
  return <div className="p-4 text-muted-foreground">Loading bookings...</div>;
 }

 if (isError) {
  return (
   <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded flex items-center gap-2">
    <AlertTriangle className="w-5 h-5" />
    An error occurred while fetching bookings.
   </div>
  );
 }

 if (!bookings || bookings.length === 0) {
  return (
   <div className="bg-orange-100 border border-orange-300 text-orange-800 px-4 py-3 rounded flex items-center gap-2">
    <AlertTriangle className="w-5 h-5" />
    No bookings found.
   </div>
  );
 }

 return (
  <div className="overflow-x-auto rounded-lg border bg-white shadow-sm">
   <table className="min-w-full text-sm">
    <thead className="bg-muted/50 border-b text-muted-foreground">
     <tr>
      <th className="text-left px-4 py-2 font-medium">Guest Name</th>
      <th className="text-left px-4 py-2 font-medium">Email</th>
      <th className="text-left px-4 py-2 font-medium">Phone</th>
      <th className="text-left px-4 py-2 font-medium">From Date</th>
      <th className="text-left px-4 py-2 font-medium">To Date</th>
      <th className="text-left px-4 py-2 font-medium">Total Amount</th>
      <th className="text-left px-4 py-2 font-medium">Status</th>
     </tr>
    </thead>
    <tbody className="divide-y">
     {bookings.map((booking) => (
      <tr key={booking.id} className="hover:bg-muted/40">
       <td className="px-4 py-2">{booking.guest_name}</td>
       <td className="px-4 py-2">{booking.guest_email}</td>
       <td className="px-4 py-2">{booking.guest_phone}</td>
       <td className="px-4 py-2">{booking.date_from}</td>
       <td className="px-4 py-2">{booking.date_to}</td>
       <td className="px-4 py-2">{booking.total_amount}</td>
       <td className="px-4 py-2">{booking.status}</td>
      </tr>
     ))}
    </tbody>
    <tfoot>
     <tr>
      <td colSpan={7} className="px-4 py-4 text-center text-sm text-muted-foreground">
       {/* Pagination placeholder */}
       Page 1 of 1
      </td>
     </tr>
    </tfoot>
   </table>
  </div>
 );
};

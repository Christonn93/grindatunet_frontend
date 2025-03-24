import { useBookings, useDeleteBooking } from "@/hooks/query/booking/useBookings";

export const BookingList = () => {
 const { data: bookings, isLoading, error } = useBookings();
 const deleteMutation = useDeleteBooking();

 if (isLoading) return <p>Loading bookings...</p>;
 if (error) return <p>Error loading bookings</p>;

 return (
  <div>
   <h2 className="text-xl font-semibold mb-4">Bookings</h2>
   {bookings?.length ? (
    <ul className="space-y-2">
     {bookings.map((booking) => (
      <li key={booking.id} className="p-3 border rounded shadow">
       <h3 className="text-lg font-medium">
        {booking.name} ({booking.status})
       </h3>
       <p>Email: {booking.email}</p>
       <p>Phone: {booking.phone}</p>
       <p>Guests: {booking.guests}</p>
       <p>Check-in: {new Date(booking.checkin).toLocaleDateString()}</p>
       <p>Check-out: {new Date(booking.checkout).toLocaleDateString()}</p>
       <p>Price: ${booking.price}</p>
       <button className="bg-red-500 text-white p-1 mt-2 rounded" onClick={() => deleteMutation.mutate(booking.id)}>
        {deleteMutation.isPending ? "Deleting..." : "Delete"}
       </button>
      </li>
     ))}
    </ul>
   ) : (
    <p>No bookings found.</p>
   )}
  </div>
 );
};

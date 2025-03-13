// import { ConfirmPaymentButton } from "./button/ConfirmPaymentButton";

// export const AdminBookings = () => {
//  if (isLoading) return <p>Loading bookings...</p>;
//  if (error) return <p>Error loading bookings.</p>;

//  return (
//   <div>
//    <h2 className="text-xl font-bold mb-4">Bookings</h2>
//    <ul>
//     {bookings.map((booking) => (
//      <li key={booking.id} className="p-4 border-b">
//       <p>
//        <strong>{booking.name}</strong> ({booking.checkin_date} - {booking.checkout_date})
//       </p>
//       <p>
//        Total: <strong>Kr. {booking.price}</strong>
//       </p>
//       <p>Status: {booking.status}</p>
//       {booking.status === "pending_payment" && <ConfirmPaymentButton bookingId={booking.id} />}
//      </li>
//     ))}
//    </ul>
//   </div>
//  );
// };

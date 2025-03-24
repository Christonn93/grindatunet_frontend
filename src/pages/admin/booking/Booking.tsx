import { Loading } from "@/components/loading/Loading";
import { FetchErrorAlert } from "@/components/notification/FetchErrorAlert";
import { BookingTable } from "@/components/table/BookingTable";
import { SectionHeader } from "@/components/text/SectionHeader";
import { useBookings } from "@/hooks/query/booking/useBookings";

export const Booking = () => {
 const { data: bookings, isLoading, isError, error } = useBookings();

 return (
  <div>
   <SectionHeader title="Bookings" withSeparator />

   <div className="mt-4">
    {isLoading && <Loading />}

    {isError && <FetchErrorAlert message={error?.message || "An error occurred while fetching bookings."} />}

    {!isLoading && !isError && bookings && bookings.length > 0 && (
     <div className="space-y-4">
      <BookingTable />
     </div>
    )}

    {!isLoading && !isError && (!bookings || bookings.length === 0) && <div>No bookings found.</div>}
   </div>
  </div>
 );
};

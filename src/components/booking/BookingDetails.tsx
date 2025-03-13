import { useUnavailableDates } from "@/hooks/query/booking/useUnavailableDates";
import { BookingCalendar } from "./BookingCalendar";
import { useBooking } from "@/hooks/handlers/useBooking";

type BookingDetailsProps = {
 formData: any;
 setFormData: (data: any) => void;
 handleSubmit: (e: React.FormEvent) => void;
 isPending: boolean;
 error: string | null;
};

export const BookingDetails = ({ formData, setFormData, handleSubmit, isPending, error }: BookingDetailsProps) => {
 const { data: unavailableDates = [], isLoading } = useUnavailableDates();
 const { handleDateChange } = useBooking();

 return (
  <form onSubmit={handleSubmit} className="space-y-4">
   {error && <p className="text-red-500">{error}</p>}

   <div className="flex justify-between space-x-4">
    <input type="text" name="name" placeholder="Name" value={formData.name} required onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full p-2 border rounded-md" />
    <input
     type="email"
     name="email"
     placeholder="Email"
     value={formData.email}
     required
     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
     className="w-full p-2 border rounded-md"
    />
   </div>

   <div className="flex justify-between space-x-4">
    <input type="tel" name="phone" placeholder="Phone" value={formData.phone} required onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full p-2 border rounded-md" />
    <input
     type="number"
     name="guests"
     min="1"
     placeholder="Guests"
     value={formData.guests}
     required
     onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
     className="w-full p-2 border rounded-md"
    />
   </div>

   {!isLoading ? <BookingCalendar onDateChange={handleDateChange} unavailableDates={unavailableDates} /> : <p>Loading unavailable dates...</p>}

   <button type="submit" disabled={isPending} className="w-full bg-primary text-white py-2 rounded-md hover:bg-secondary">
    {isPending ? "Submitting..." : "Create Booking"}
   </button>
  </form>
 );
};

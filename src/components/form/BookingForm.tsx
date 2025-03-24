import { useCreateBooking } from "@/hooks/query/booking/useBookings";
import { FormWrapper } from "../wrappers/FormWrapper";
import { FormGroup } from "./FormGroup";
import { useBookingStore } from "@/hooks/store/useBookingStore";
import { PopoverCalendarRange } from "../popover/PopoverCalendarRange";
import { logger } from "@/utils/logger/logger";

export const BookingForm = () => {
 const { name, email, phone, guests, range, setName, setEmail, setPhone, setGuests, reset } = useBookingStore();

 const mutation = useCreateBooking();

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!name || !email || !phone || !range?.from || !range?.to) {
   // something is missing
   return;
  }

  try {
   await mutation.mutateAsync({
    name,
    email,
    phone,
    checkin: range.from.toISOString(),
    checkout: range.to.toISOString(),
    guests,
   });

   reset();
   alert("Booking created!");
  } catch (error: unknown) {
   logger.error(`Failed to create booking: ${error}`);
  }
 };

 return (
  <FormWrapper
   onSubmit={handleSubmit}
   buttonText="Book overnatting"
   errorText="Noe gikk galt, prøv igjen senere."
   isError={!!mutation.isError}
   submittingText="Oppretter booking..."
   isSubmitting={mutation.isPending}
  >
   <FormGroup label="Navn">
    <input id="name" type="text" placeholder="Fult navn" value={name} onChange={(e) => setName(e.target.value)} className="p-2 border rounded-md w-full" />
   </FormGroup>

   <FormGroup label="Epost addresse">
    <input id="email" type="email" placeholder="Epost addresse" value={email} onChange={(e) => setEmail(e.target.value)} className="p-2 border rounded-md w-full" />
   </FormGroup>

   <FormGroup label="Telefon nummmer">
    <input id="phone" type="text" placeholder="Telefon nummer" value={phone} onChange={(e) => setPhone(e.target.value)} className="p-2 border rounded-md w-full" />
   </FormGroup>

   <FormGroup label="Antall gjester">
    <input id="guests" type="number" min={1} value={guests} onChange={(e) => setGuests(Number(e.target.value))} className="p-2 border rounded-md w-full" />
   </FormGroup>

   <FormGroup label="Velg dato">
    <PopoverCalendarRange />
   </FormGroup>
  </FormWrapper>
 );
};

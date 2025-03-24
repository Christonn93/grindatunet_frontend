import { useViewContext } from "@/hooks/handlers/useViewContext";
import { Booking as AdminBooking } from "@/pages/admin/booking/Booking";
import { Booking as UserBooking } from "@/pages/user/Booking";

export const BookingPage = () => {
 const { isAdmin, isInUser, isInAdmin } = useViewContext();

 const shouldHideAdminContent = isInAdmin && !isAdmin;

 if (shouldHideAdminContent) {
  return (
   <div className="text-muted-foreground">
    <h3>Ingenting å se her</h3>
   </div>
  );
 }

 return (
  <div className="space-y-6">
   {isAdmin && isInAdmin && <AdminBooking />}
   {isAdmin && isInUser && <UserBooking />}
   {!isAdmin && <UserBooking />}
  </div>
 );
};

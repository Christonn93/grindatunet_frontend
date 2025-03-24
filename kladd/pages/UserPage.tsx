import { CabinBook } from "@/components/content/CabinBook";
import { CabinNews } from "@/components/content/CabinNews";
import { CabinRules } from "@/components/content/CabinRules";
import { BookingForm } from "@/components/form/BookingForm";
import { CabinBookForm } from "@/components/form/CabinBookForm";
import { TabsParent } from "@/components/tabs/TabsParent";
import { Button } from "@/components/ui/button";
import { useAuthActions } from "@/hooks/handlers/useAuthRedirect";

export const UserPage = () => {
 const { handleLogout } = useAuthActions("/user", "/");

 const CabinBooklet = () => (
  <>
   <CabinBookForm />
   <CabinBook />
  </>
 );

 const tabs = [
  { id: "news", label: "Hytte nytt", content: <CabinNews /> },
  { id: "booking", label: "Booking", content: <BookingForm /> },
  { id: "history", label: "Hytte boka", content: <CabinBooklet /> },
  { id: "rules", label: "Hytte regler", content: <CabinRules /> },
 ];

 return (
  <div className="flex flex-col p-8">
   <div className="bg-white p-8 rounded-2xl shadow-xl">
    <div className="flex items-center justify-between mb-8 border-b pb-4 border-gray-200 align-middle">
     <h1 className="text-3xl font-bold text-gray-800">Welcome, User!</h1>
     <Button className="mt-4" onClick={handleLogout}>
      Log Out
     </Button>
    </div>
    <div className="flex gap-8">
     <TabsParent tabs={tabs} defaultTab="news" />
    </div>
   </div>
  </div>
 );
};

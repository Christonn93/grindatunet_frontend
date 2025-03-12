import { BookingForm } from "@/components/form/BookingForm";
import { TabsParent } from "@/components/tabs/TabsParent";
import { Button } from "@/components/ui/button";
import { useAuthActions } from "@/hooks/handlers/useAuthRedirect";

export const UserPage = () => {
 const { handleLogout } = useAuthActions("/user", "/");

 const tabs = [
  { id: "start", label: "Overview", content: <p>User Overview Content</p> },
  { id: "booking", label: "Booking", content: <BookingForm /> },
  { id: "history", label: "History", content: <p>Booking History Content</p> },
 ];

 return (
  <div className="flex flex-col min-h-full p-8">
   <div className="bg-white p-8 rounded-2xl shadow-xl">
    <div className="flex items-center justify-between mb-8 border-b pb-4 border-gray-200 align-middle">
     <h1 className="text-3xl font-bold text-gray-800">Welcome, User!</h1>
     <Button className="mt-4" onClick={handleLogout}>
      Log Out
     </Button>
    </div>
    <TabsParent tabs={tabs} defaultTab="start" />
   </div>
  </div>
 );
};

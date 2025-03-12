import { useBooking } from "@/hooks/handlers/useBooking";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

export const PaymentDialog = () => {
 const { showModal, setShowModal, handlePayment } = useBooking();

 return (
  <Dialog open={showModal} onOpenChange={setShowModal}>
   <DialogContent>
    <DialogHeader>
     <DialogTitle>Select Payment Method</DialogTitle>
    </DialogHeader>
    <div className="space-y-4">
     <Button onClick={() => handlePayment("bill")} className="w-full">
      Pay by Bill
     </Button>
     <Button onClick={() => handlePayment("vipps")} className="w-full">
      Pay with Vipps
     </Button>
    </div>
   </DialogContent>
  </Dialog>
 );
};

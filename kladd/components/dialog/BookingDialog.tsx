import { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { CheckedState } from "@radix-ui/react-checkbox";

export const BookingDialog = () => {
 const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
 const [isProcessing, setIsProcessing] = useState(false);
 const [agreementChecked, setAgreementChecked] = useState<boolean>(false);

 // Convert CheckedState to boolean
 const handleCheckboxChange = (checked: CheckedState) => {
  setAgreementChecked(checked === true);
 };

 const handleBooking = () => {
  if (!selectedDate) {
   toast.error("Please select a date for your booking.");
   return;
  }

  if (!agreementChecked) {
   toast.error("You must agree to the terms before booking.");
   return;
  }

  setIsProcessing(true);
  setTimeout(() => {
   setIsProcessing(false);
   toast.success("Your booking has been successfully confirmed!");
  }, 2000);
 };

 return (
  <Dialog>
   <DialogTrigger asChild>
    <Button variant="outline">Book Now</Button>
   </DialogTrigger>
   <DialogContent className="max-w-md">
    <DialogHeader>
     <DialogTitle>Book Your Stay</DialogTitle>
     <DialogDescription>Select your preferred date and confirm your booking.</DialogDescription>
    </DialogHeader>

    {/* Date Selection */}
    <div className="flex flex-col items-center space-y-4">
     <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} />

     {/* Agreement Checkbox */}
     <div className="flex items-center space-x-2">
      <Checkbox id="agreement" checked={agreementChecked} onCheckedChange={handleCheckboxChange} />
      <label htmlFor="agreement" className="text-sm text-gray-600">
       I agree to the terms and conditions
      </label>
     </div>

     {/* Progress Indicator */}
     {isProcessing && <Progress value={80} className="w-full" />}

     {/* Booking Button */}
     <Button onClick={handleBooking} disabled={isProcessing}>
      {isProcessing ? "Processing..." : "Confirm Booking"}
     </Button>
    </div>
   </DialogContent>
  </Dialog>
 );
};

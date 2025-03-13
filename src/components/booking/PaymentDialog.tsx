import { Dialog } from "@headlessui/react";

type PaymentDialogProps = {
 isOpen: boolean;
 price: number | null;
 onClose: () => void;
};

export const PaymentDialog = ({ isOpen, price, onClose }: PaymentDialogProps) => {
 return (
  <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
   <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
    <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
    <p>
     Total: <strong>Kr. {price}</strong>
    </p>
    <p>
     <strong>Pay with Vipps:</strong> Send Kr. {price} to <strong>Vipps #123456</strong>
    </p>
    <p>
     <strong>Bank Transfer:</strong> Transfer to <strong>Account #987654321</strong>
    </p>
    <p className="text-sm text-gray-600 mt-2">Please reply to the email once you have made the payment.</p>
    <button onClick={onClose} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
     Close
    </button>
   </div>
  </Dialog>
 );
};

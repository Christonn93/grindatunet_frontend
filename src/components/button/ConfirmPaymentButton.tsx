import { useConfirmPayment } from "@/hooks/query/booking/useComfirmPayment";

export const ConfirmPaymentButton = ({ bookingId }: { bookingId: number }) => {
 const { mutate, isPending } = useConfirmPayment();

 return (
  <button onClick={() => mutate(bookingId)} disabled={isPending} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
   {isPending ? "Confirming..." : "Confirm Payment"}
  </button>
 );
};

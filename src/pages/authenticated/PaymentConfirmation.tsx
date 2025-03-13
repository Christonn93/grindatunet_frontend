import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const API_BASE_URL = "https://wp.grindatunet.no/wordpress/wp-json/wp/v2/bookings";

export default function PaymentConfirmation() {
 const [searchParams] = useSearchParams();
 const [status, setStatus] = useState<"loading" | "success" | "error">("loading");

 useEffect(() => {
  const bookingId = searchParams.get("booking_id");
  const token = searchParams.get("token");

  if (!bookingId || !token) {
   setStatus("error");
   return;
  }

  axios
   .get(`${API_BASE_URL}/confirm-payment?booking_id=${bookingId}&token=${token}`)
   .then((response) => {
    if (response.data.success) {
     setStatus("success");
    } else {
     setStatus("error");
    }
   })
   .catch(() => setStatus("error"));
 }, [searchParams]);

 return (
  <div className="p-6 max-w-lg mx-auto text-center">
   {status === "loading" && <p>Bekrefter betaling...</p>}
   {status === "success" && <p>✅ Betalingen er bekreftet! Takk for din reservasjon.</p>}
   {status === "error" && <p>❌ Kunne ikke bekrefte betalingen. Kontakt support.</p>}
  </div>
 );
}

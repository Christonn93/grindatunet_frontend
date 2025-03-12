import "react-datepicker/dist/react-datepicker.css";
import { CustomerName } from "./formFields/CustomerName";
import { CustomerContact } from "./formFields/CustomerContact";
import { BookingNotes } from "./formFields/BookingNotes";
import { useFormikHandler } from "@/hooks/handlers/useFormikHandler";
import { GuestsInformation } from "./formFields/GuestsInformation";
import { FormButtonGroup } from "../buttons/FormButtonGroup";
import { PriceContainer } from "../container/PriceContainer";
import { DateTimeCard } from "./formFields/DateTimeCard";

export const BookingForm = () => {
 const formik = useFormikHandler();

 return (
  <form className="flex flex-col md:flex-row gap-6 p-6 bg-white" onSubmit={formik.handleSubmit}>
   <div className="flex-[2] space-y-4 pl-6">
    <CustomerName formik={formik} />
    <CustomerContact formik={formik} />
    <GuestsInformation formik={formik} />
    <DateTimeCard formik={formik} />
    <BookingNotes formik={formik} />
    <FormButtonGroup formik={formik} />
   </div>
   <PriceContainer />
  </form>
 );
};

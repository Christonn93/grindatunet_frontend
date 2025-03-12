import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BookingFormValues } from "@/utils/initialValues/initialBookingFormValues";
import { Label } from "@/components/ui/label";
import { DateTimePicker } from "./DatePicker";
import { FormikProps } from "formik";
import { TimePicker } from "./TimePicker";

export const DateTimeCard = ({ formik }: { formik: FormikProps<BookingFormValues> }) => {
 return (
  <Card>
   <CardHeader>
    <CardTitle>
     <Label htmlFor="dateRange">Velg oppholdstid og dato</Label>
    </CardTitle>
    <CardDescription>
     <p className="text-black">Velg dato og tid for når oppholdet skal finne sted</p>
    </CardDescription>
   </CardHeader>

   <CardContent>
    <div className="grid grid-cols-2 gap-4">
     <DateTimePicker formik={formik} />
     <div className="flex flex-col gap-2">
      <TimePicker labelText={"Innsjekk:"} formik={formik} fieldName="startTime" />
      <TimePicker labelText={"Utsjekk:"} formik={formik} fieldName="endTime" />
     </div>
    </div>
   </CardContent>

   <CardFooter className="flex flex-col items-start gap-2">
    {formik.errors.startDate && formik.touched.startDate && <div className="text-red-500 text-sm">{String(formik.errors.startDate)}</div>}
    {formik.errors.endDate && formik.touched.endDate && <div className="text-red-500 text-sm">{String(formik.errors.endDate)}</div>}
   </CardFooter>
  </Card>
 );
};

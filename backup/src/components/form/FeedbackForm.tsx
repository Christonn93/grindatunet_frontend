import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { logger } from "@/utils/logger/logger";
import { useCreateFeedback } from "@/hooks/query/feedback/useFeedback";

const feedbackSchema = Yup.object().shape({
 name: Yup.string().trim().required("Navn er påkrevd"),
 email: Yup.string().trim().email("Ugyldig e-postadresse").required("E-post er påkrevd"),
 message: Yup.string().trim().min(10, "Tilbakemelding må være minst 10 tegn").required("Tilbakemelding er påkrevd"),
});

export const FeedbackForm = () => {
 const mutation = useCreateFeedback();

 const handleSubmit = async (values: any, { resetForm }: any) => {
  try {
   await mutation.mutateAsync(values);
   resetForm();
   alert("Tilbakemelding sendt!");
  } catch (error: unknown) {
   logger.error(`Kunne ikke sende tilbakemelding: ${error}`);
   alert("Noe gikk galt, prøv igjen senere.");
  }
 };

 return (
  <Formik initialValues={{ name: "", email: "", message: "" }} validationSchema={feedbackSchema} onSubmit={handleSubmit}>
   {({ isSubmitting }) => (
    <Form className="space-y-4 p-4">
     <div>
      <label htmlFor="name" className="block">
       Navn
      </label>
      <Field type="text" name="name" placeholder="Fullt navn" className="p-2 border rounded-md w-full" />
      <ErrorMessage name="name" component="p" className="text-red-500 text-sm" />
     </div>

     <div>
      <label htmlFor="email" className="block">
       E-postadresse
      </label>
      <Field type="email" name="email" placeholder="E-postadresse" className="p-2 border rounded-md w-full" />
      <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
     </div>

     <div>
      <label htmlFor="message" className="block">
       Tilbakemelding
      </label>
      <Field as="textarea" name="message" placeholder="Skriv din tilbakemelding her" className="p-2 border rounded-md w-full" />
      <ErrorMessage name="message" component="p" className="text-red-500 text-sm" />
     </div>

     <button type="submit" className="bg-blue-500 text-white p-2 rounded disabled:opacity-50" disabled={isSubmitting}>
      {isSubmitting ? "Sender..." : "Send tilbakemelding"}
     </button>
    </Form>
   )}
  </Formik>
 );
};

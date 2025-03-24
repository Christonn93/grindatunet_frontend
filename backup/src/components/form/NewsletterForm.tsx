import { useCreateNewsletter } from "@/hooks/query/newsletter/useNewsletters";
import { logger } from "@/utils/logger/logger";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";

const newsletterSchema = Yup.object().shape({
 subject: Yup.string().trim().max(100, "Emnet kan ikke være lengre enn 100 tegn").required("Emne er påkrevd"),
 message: Yup.string().trim().min(10, "Meldingen må være minst 10 tegn").required("Melding er påkrevd"),
});

export const NewsletterForm = () => {
 const mutation = useCreateNewsletter();

 const handleSubmit = async (values: { subject: string; message: string }, { resetForm }: FormikHelpers<{ subject: string; message: string }>) => {
  try {
   await mutation.mutateAsync(values);
   resetForm();
   alert("Nyhetsbrev opprettet!");
  } catch (error: unknown) {
   logger.error("Kunne ikke opprette nyhetsbrev:", error);
   alert("En feil oppstod under opprettelsen av nyhetsbrevet. Prøv igjen.");
  }
 };

 return (
  <Formik initialValues={{ subject: "", message: "" }} validationSchema={newsletterSchema} onSubmit={handleSubmit}>
   {({ isSubmitting }) => (
    <Form className="space-y-4 p-4">
     <div>
      <Field type="text" name="subject" placeholder="Emne" className="w-full p-2 border rounded bg-white" />
      <ErrorMessage name="subject" component="p" className="text-red-500 text-sm" />
     </div>

     <div>
      <Field as="textarea" name="message" placeholder="Melding" className="w-full p-2 border rounded bg-white" />
      <ErrorMessage name="message" component="p" className="text-red-500 text-sm" />
     </div>

     <button type="submit" className="bg-blue-500 text-white p-2 rounded disabled:opacity-50" disabled={isSubmitting}>
      {isSubmitting ? "Oppretter..." : "Opprett"}
     </button>
    </Form>
   )}
  </Formik>
 );
};

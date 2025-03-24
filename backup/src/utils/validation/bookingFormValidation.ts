import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
 name: Yup.string().required("Name is required"),
 guests: Yup.number().min(1, "At least 1 guest is required").required("Number of guests is required"),
 startDate: Yup.date().required("Check-in date is required"),
 endDate: Yup.date().required("Check-out date is required"),
 purpose: Yup.string().oneOf(["pleasure", "business"]).required("Purpose is required"),
 termsAccepted: Yup.boolean().oneOf([true], "You must accept the terms and policy"),
});

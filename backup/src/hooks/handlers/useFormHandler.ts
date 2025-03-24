import { useState } from "react";

export const useFormHandler = <T extends Record<string, unknown>>(initialValues: T, onSubmit: (values: T) => void) => {
 const [values, setValues] = useState(initialValues);
 const [errors, setErrors] = useState<Record<string, string>>({});
 const [isSubmitting, setIsSubmitting] = useState(false);

 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  const { name, value } = e.target;
  setValues((prev) => ({ ...prev, [name]: value }));
 };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  // Basic validation (can be extended)
  const newErrors: Record<string, string> = {};
  Object.entries(values).forEach(([key, value]) => {
   if (!value) newErrors[key] = `${key} is required`;
  });

  if (Object.keys(newErrors).length > 0) {
   setErrors(newErrors);
   setIsSubmitting(false);
   return;
  }

  await onSubmit(values);
  setIsSubmitting(false);
 };

 return { values, errors, isSubmitting, handleChange, handleSubmit };
};

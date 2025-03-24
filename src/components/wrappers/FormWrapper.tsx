import React from "react";
import { Button } from "../ui/button";

interface FormWrapperProps {
 children: React.ReactNode;
 onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
 formHeader?: string;
 buttonText?: string;
 isSubmitting?: boolean;
 submittingText?: string;
 isError?: boolean;
 errorText?: string;
}

export const FormWrapper: React.FC<FormWrapperProps> = ({
 children,
 onSubmit,
 formHeader,
 buttonText = "Submit",
 isSubmitting = false,
 submittingText = "Submitting...",
 isError = false,
 errorText = "An error occurred.",
}) => {
 return (
  <div className="flex flex-grow items-center justify-center mt-10">
   <div className="w-full flex-grow max-w-lg p-4">
    {formHeader && <h1 className="text-2xl font-bold text-center mb-10">{formHeader}</h1>}
    <form onSubmit={onSubmit} className="flex flex-col gap-4 space w-full max-w-lg mx-auto">
     {children}
     <Button type="submit" className="flex items-center justify-center bg-blue-500 text-white p-2 w-full rounded-md disabled:opacity-50 mt-5" disabled={isSubmitting}>
      {isSubmitting ? (
       <>
        <span className="loader mr-2"></span> {submittingText}
       </>
      ) : (
       buttonText
      )}
     </Button>
    </form>
    {isError && <p className="text-red-500 text-center mt-2">{errorText}</p>}
   </div>
  </div>
 );
};

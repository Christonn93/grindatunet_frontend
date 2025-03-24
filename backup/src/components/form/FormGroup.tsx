import React from "react";

interface FormGroupProps {
 label: string;
 children: React.ReactNode;
 error?: string;
}

export const FormGroup: React.FC<FormGroupProps> = ({ label, children, error }) => {
 return (
  <div className="flex flex-col w-full flex-grow">
   <label className="text-sm font-medium">{label}</label>
   <div className="flex flex-col sm:flex-row sm:items-center gap-2">{children}</div>
   {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
 );
};

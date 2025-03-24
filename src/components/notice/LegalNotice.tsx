import React from "react";

type LegalNoticeProps = {
 privacyPolicyLink?: string;
 termsLink?: string;
};

export const LegalNotice: React.FC<LegalNoticeProps> = ({ privacyPolicyLink, termsLink }) => {
 if (!privacyPolicyLink && !termsLink) return null;

 return (
  <div className="w-full text-center text-sm text-gray-600 mt-4">
   {privacyPolicyLink && (
    <a href={privacyPolicyLink} className="text-blue-500 hover:underline">
     Privacy Policy
    </a>
   )}
   {privacyPolicyLink && termsLink && <span> &middot; </span>}
   {termsLink && (
    <a href={termsLink} className="text-blue-500 hover:underline">
     Terms & Conditions
    </a>
   )}
  </div>
 );
};

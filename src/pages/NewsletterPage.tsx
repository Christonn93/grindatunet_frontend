import { useViewContext } from "@/hooks/handlers/useViewContext";
import { Newsletter as AdminNewsletter } from "@/pages/admin/Newsletter";
import { Newsletter as UserNewsletter } from "@/pages/user/Newsletter";

export const NewsletterPage = () => {
 const { isAdmin, isInUser, isInAdmin } = useViewContext();

 const shouldHideAdminContent = isInAdmin && !isAdmin;

 if (shouldHideAdminContent) {
  return (
   <div className="text-muted-foreground">
    <h3>Ingenting å se her</h3>
   </div>
  );
 }

 return (
  <div className="space-y-6">
   {isAdmin && isInAdmin && <AdminNewsletter />}
   {isAdmin && isInUser && <UserNewsletter />}
   {!isAdmin && <UserNewsletter />}
  </div>
 );
};

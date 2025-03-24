import { useViewContext } from "@/hooks/handlers/useViewContext";
import { Feedback as AdminFeedback } from "@/pages/admin/Feedback";
import { Feedback as UserFeedback } from "@/pages/user/Feedback";

export const FeedbackPage = () => {
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
   {isAdmin && isInAdmin && <AdminFeedback />}
   {isAdmin && isInUser && <UserFeedback />}
   {!isAdmin && <UserFeedback />}
  </div>
 );
};

import { Routes, Route } from "react-router-dom";
import { useAuthStore } from "./hooks/store/authStore";
import { ProtectedRoute } from "./route/ProtectedRoute";
import { LoginPage, NotFound, PrivacyPolicyPage, TermsPage } from "./pages/common";
import { AdminLayout, DefaultLayout, UserLayout } from "./layout";
import { AdminPanel } from "./pages/admin";

export const App = () => {
 const { user } = useAuthStore();
 const isAdmin = user?.roles?.includes("administrator");

 return (
  <Routes>
   {/* 🔓 Public / Auth layout */}
   <Route element={<DefaultLayout />}>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/terms" element={<TermsPage />} />
    <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
    <Route path="*" element={<NotFound />} />
   </Route>

   {/* 👤 User Layout */}
   <Route element={<ProtectedRoute />}>
    <Route path="/bruker/*" element={<UserLayout />}>
     {/* <Route path="minside" element={<Mypage />} />
     <Route path="booking" element={<BookingPage />} />
     <Route path="hyttenytt" element={<NewsletterPage />} />
     <Route path="hytteboka" element={<FeedbackPage />} /> */}
    </Route>
   </Route>

   {/* 🛡️ Admin Layout */}
   {isAdmin && (
    <Route path="/admin/*" element={<AdminLayout />}>
     <Route path="kontrollpanel" element={<AdminPanel />} />
     {/* <Route path="booking" element={<BookingPage />} />
     <Route path="booking/new" element={<BookingNew />} />
     <Route path="booking/settings" element={<BookingSettings />} />
     <Route path="hyttenytt" element={<NewsletterPage />} />
     <Route path="hytteboka" element={<FeedbackPage />} />
     <Route path="okonomi" element={<FinancePanel />} /> */}
    </Route>
   )}
  </Routes>
 );
};

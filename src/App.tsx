import { Routes, Route } from "react-router-dom";
import { useAuthStore } from "./hooks/store/authStore";
import { Login } from "./pages/Login";
import { NotFoundPage } from "./pages/default/NotFoundPage";
import { TermsPage } from "./pages/default/TermsPage";
import { PrivacyPolicyPage } from "./pages/default/PrivacyPolicyPage";
import { Homepage } from "./pages/Homepage";
import { BookingPage } from "./pages/BookingPage";
import { NewsletterPage } from "./pages/NewsletterPage";

import { ProtectedRoute } from "./route/ProtectedRoute";
import { DefaultLayout } from "./layout/DefaultLayout";
import { UserLayout } from "./layout/UserLayout";
import { AdminLayout } from "./layout/AdminLayout";
import { Mypage } from "./pages/user/Mypage";
import { FeedbackPage } from "./pages/FeedbackPage";
import { FinancePanel } from "./pages/admin/FinancePanel";
import { AdminPanel } from "./pages/admin/Adminpanel";
import { BookingSettings } from "./pages/admin/booking/BookingSettings";
import { BookingNew } from "./pages/admin/booking/BookingNew";

export const App = () => {
 const { user } = useAuthStore();
 const isAdmin = user?.roles?.includes("administrator");

 return (
  <Routes>
   {/* 🔓 Public / Auth layout */}
   <Route element={<DefaultLayout />}>
    <Route path="/" element={<Homepage />} />
    <Route path="/login" element={<Login />} />
    <Route path="/terms" element={<TermsPage />} />
    <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
    <Route path="*" element={<NotFoundPage />} />
   </Route>

   {/* 👤 User Layout */}
   <Route element={<ProtectedRoute />}>
    <Route path="/bruker/*" element={<UserLayout />}>
     <Route path="minside" element={<Mypage />} />
     <Route path="booking" element={<BookingPage />} />
     <Route path="hyttenytt" element={<NewsletterPage />} />
     <Route path="hytteboka" element={<FeedbackPage />} />
    </Route>
   </Route>

   {/* 🛡️ Admin Layout */}
   {isAdmin && (
    <Route path="/admin/*" element={<AdminLayout />}>
     <Route path="kontrollpanel" element={<AdminPanel />} />
     <Route path="booking" element={<BookingPage />} />
     <Route path="booking/new" element={<BookingNew />} />
     <Route path="booking/settings" element={<BookingSettings />} />
     <Route path="hyttenytt" element={<NewsletterPage />} />
     <Route path="hytteboka" element={<FeedbackPage />} />
     <Route path="okonomi" element={<FinancePanel />} />
    </Route>
   )}
  </Routes>
 );
};

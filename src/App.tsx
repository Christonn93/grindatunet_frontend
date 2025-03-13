import { Routes, Route } from "react-router-dom";
import { AuthLayout } from "./layout/AuthLayout";
import { UnAuthLayout } from "./layout/UnAuthLayout";
import { Home } from "./pages/Home";
import { UserPage } from "./pages/authenticated/UserPage";
import { NotFoundPage } from "./pages/NotFound";
import { Login } from "./pages/unauthenticated/Login";
import { ProtectedRouteTemp } from "./layout/ProtectedRoute";
import { Booking } from "./pages/authenticated/Booking";
import { News } from "./pages/authenticated/News";
import { Review } from "./pages/authenticated/Review";

export const App = () => {
 return (
  <Routes>
   {/* Unauthenticated Routes */}
   <Route element={<UnAuthLayout />}>
    <Route path="/home" element={<Home />} />
    <Route index element={<Login />} />
   </Route>

   {/* Authenticated Routes (Temporarily Unprotected) */}
   <Route element={<ProtectedRouteTemp />}>
    <Route element={<AuthLayout />}>
     <Route path="/minside" element={<UserPage />} />
     <Route path="/booking" element={<Booking />} />
     <Route path="/booking/:id" element={<Booking />} />
     <Route path="/news" element={<News />} />
     <Route path="/news/:id" element={<News />} />
     <Route path="/review" element={<Review />} />
     <Route path="/review/:id" element={<Review />} />
    </Route>
   </Route>

   {/* Catch-all Route */}
   <Route path="*" element={<NotFoundPage />} />
  </Routes>
 );
};

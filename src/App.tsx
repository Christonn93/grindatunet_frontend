import { Routes, Route } from "react-router-dom";
import { AuthLayout } from "./layout/AuthLayout";
import { UnAuthLayout } from "./layout/UnAuthLayout";
import { Home } from "./pages/Home";
import { UserPage } from "./pages/authenticated/UserPage";
import { NotFoundPage } from "./pages/NotFound";
import { Login } from "./pages/unauthenticated/Login";
import { ProtectedRouteTemp } from "./layout/ProtectedRoute";

export const App = () => {
 return (
  <Routes>
   {/* Unauthenticated Routes */}
   <Route element={<UnAuthLayout />}>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
   </Route>

   {/* Authenticated Routes (Temporarily Unprotected) */}
   <Route element={<ProtectedRouteTemp />}>
    <Route element={<AuthLayout />}>
     <Route path="/user" element={<UserPage />} />
     <Route path="/user/:id" element={<UserPage />} />
    </Route>
   </Route>

   {/* Catch-all Route */}
   <Route path="*" element={<NotFoundPage />} />
  </Routes>
 );
};

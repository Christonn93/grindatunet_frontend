import { Routes, Route } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { Home, NotFoundPage, UserPage } from "./pages";

export const App = () => {
 return (
  <Routes>
   <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="/minside" element={<UserPage />} />
    <Route path="*" element={<NotFoundPage />} />
   </Route>
  </Routes>
 );
};

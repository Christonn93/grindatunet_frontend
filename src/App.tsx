import { Routes, Route } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { Home, NotFound } from "./pages";

export const App = () => {
 return (
  <Routes>
   <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="*" element={<NotFound />} />
   </Route>
  </Routes>
 );
};

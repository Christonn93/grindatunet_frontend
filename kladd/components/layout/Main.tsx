import { Outlet } from "react-router-dom";

export const Main = () => {
 return (
  <main className="flex-1 p-4 m-5">
   <Outlet />
  </main>
 );
};

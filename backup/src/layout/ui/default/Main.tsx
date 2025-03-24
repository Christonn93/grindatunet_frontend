import { Outlet } from "react-router-dom";

export const Main = () => {
 return (
  <main className="flex flex-1 w-full flex-col px-10 py-10 bg-gray-100">
   <Outlet />
  </main>
 );
};

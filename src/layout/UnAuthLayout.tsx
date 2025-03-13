import { Outlet } from "react-router-dom";

export const UnAuthLayout = () => {
 return (
  <div className="unauth-layout">
   <header>Public Header</header>
   <main>
    <Outlet />
   </main>
  </div>
 );
};

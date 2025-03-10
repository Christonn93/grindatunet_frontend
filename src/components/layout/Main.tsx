import { Outlet } from "react-router-dom";
import { Container } from "../container/Container";

export const Main = () => {
 return (
  <main className="flex-1 p-4 m-5">
   <Container>
    <Outlet />
   </Container>
  </main>
 );
};

import { Footer, Header, Main } from "@/components/layout";
import { BottomNav } from "@/components/nav/BottomNav";

export const UserLayout = () => {
 return (
  <div className="flex flex-col bg-white h-screen">
   <Header />
   <Main />
   <Footer />
   <BottomNav />
  </div>
 );
};

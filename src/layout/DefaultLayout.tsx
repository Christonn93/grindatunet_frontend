import { BottomNav } from "@/components/common/nav/BottomNav";
import { Footer, Header, Main } from "./ui/default";

export const DefaultLayout = () => {
 return (
  <div className="flex flex-col bg-white h-screen">
   <Header />
   <Main />
   <Footer />
   <BottomNav />
  </div>
 );
};

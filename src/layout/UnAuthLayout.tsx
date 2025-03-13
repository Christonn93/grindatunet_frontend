import { Footer, Header, Main } from "@/components/layout";

export const UnAuthLayout = () => {
 return (
  <div className="flex flex-col min-h-screen">
   <Header isAuthenticated={true} />
   <Main />
   <Footer />
  </div>
 );
};

import { NewsletterContainer } from "@/components/container/NewsletterContainer";
import { WeatherContainer } from "@/components/container/WeatherContainer";
import { SubscribeForm } from "@/components/form/SubscribeForm";
import { Loading } from "@/components/loading/Loading";
import { MainHeading } from "@/components/text/MainHeading";
import { useAuthStore } from "@/hooks/store/authStore";

export const UserDashboard = () => {
 const { user, isAuthenticated } = useAuthStore();

 if (!isAuthenticated()) {
  return <Loading />;
 }

 return (
  <div className="px-10 py-10 lg:px-20 lg:py-20 space-y-10">
   <div>
    <MainHeading text={`Velkommen, ${user?.name}`} />
   </div>

   <div className="flex flex-col gap-8 lg:flex-row">
    <div className="w-full lg:w-1/2">
     <NewsletterContainer />
    </div>
    <div className="w-full lg:w-1/3">
     <WeatherContainer />
    </div>
   </div>
  </div>
 );
};

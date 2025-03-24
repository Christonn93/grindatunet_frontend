import { NewsletterContainer } from "@/components/container/NewsletterContainer";
import { WeatherContainer } from "@/components/container/WeatherContainer";
import { SubscribeForm } from "@/components/form/SubscribeForm";
import { Loading } from "@/components/loading/Loading";
import { MainHeading } from "@/components/text/MainHeading";
import { SmallHeading } from "@/components/text/SmallHeading";
import { Separator } from "@/components/ui/separator";
import { useAuthStore } from "@/hooks/store/authStore";

export const Mypage = () => {
 const { user, isAuthenticated } = useAuthStore();

 if (!isAuthenticated()) {
  return <Loading />;
 }

 return (
  <div className="space-y-10">
   <div>
    <MainHeading text={`Velkommen, ${user?.name}`} separator={true} />
    <p className="text-lg">Dette er din side. Her kan du se nyheter og været på hytta. Du kan også melde deg på nyhetsbrevet.</p>
   </div>

   <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
    {/* Left column: Newsletter */}
    <div className="w-full lg:flex-1">
     <NewsletterContainer />
    </div>

    {/* Vertical separator for large screens only */}
    <Separator orientation="vertical" className="hidden lg:block h-full w-px bg-border mx-4" />

    {/* Right column: Weather */}
    <div className="w-full lg:w-1/4">
     <WeatherContainer />
     <div className="mt-10">
      <SmallHeading text="Abonner på Hyttenytt" />
      <div className="mt-5">
       <SubscribeForm />
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

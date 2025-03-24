import { SubscribeForm } from "@/components/form/SubscribeForm";
import { NewsletterList } from "@/components/newsletter/NewsletterList";
import { SectionHeader } from "@/components/text/SectionHeader";
import { Separator } from "react-aria-components";

export const Newsletter = () => {
 return (
  <div className="space-y-10">
   <SectionHeader title="Hyttenytt" as="h1" withSeparator />

   <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
    {/* Left column: Newsletter */}

    <div className="w-full lg:flex-1">
     <NewsletterList />
    </div>

    {/* Vertical separator for large screens only */}
    <Separator orientation="vertical" className="hidden lg:block h-full w-px bg-border mx-4" />

    {/* Right column: Weather */}
    <div className="w-full lg:w-1/4">
     <div className="mt-5">
      <SubscribeForm />
     </div>
    </div>
   </div>
  </div>
 );
};

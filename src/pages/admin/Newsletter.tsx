import { BaseDialog } from "@/components/dialog/BaseDialog";
import { NewsletterForm } from "@/components/form/NewsletterForm";
import { NewsletterList } from "@/components/newsletter/NewsletterList";
import { SectionHeader } from "@/components/text/SectionHeader";
import { Button } from "@/components/ui/button";

export const Newsletter = () => {
 return (
  <div>
   <SectionHeader title="Hyttenytt" actionButton={<BaseDialog trigger={<Button>Skriv nytt</Button>} title="Lag hyttenytt" children={<NewsletterForm />} />} withSeparator />

   <div className="mt-4">
    <NewsletterList />
   </div>
  </div>
 );
};

import { NewsletterList } from "../newsletter/NewsletterList";
import { SmallHeading } from "../text/SmallHeading";

export const NewsletterContainer = () => {
 return (
  <>
   <div className="mb-4">
    <SmallHeading text="Hyttenytt" />
   </div>
   <NewsletterList />
  </>
 );
};

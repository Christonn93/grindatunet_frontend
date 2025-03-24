import { Loading } from "@/components/loading/Loading";
import { Button } from "@/components/ui/button";
import { useFeedback } from "@/hooks/query/feedback/useFeedback";
import { FetchErrorAlert } from "@/components/notification/FetchErrorAlert";
import { FeedbackTable } from "@/components/table/FeedbackTable";
import { SectionHeader } from "@/components/text/SectionHeader";
import { BaseDialog } from "@/components/dialog/BaseDialog";
import { FeedbackForm } from "@/components/form/FeedbackForm";

export const Feedback = () => {
 const { data: feedbacks, isLoading, isError } = useFeedback();

 return (
  <div>
   <SectionHeader title="Hytteboka" actionButton={<BaseDialog trigger={<Button>Skriv i boka</Button>} children={<FeedbackForm />} />} withSeparator />

   <div className="mt-4">
    {isLoading && <Loading />}

    {isError && <FetchErrorAlert message={"  Noe gikk galt ved henting av tilbakemeldinger."} />}

    {!isLoading && !isError && feedbacks && feedbacks.length > 0 && (
     <div className="space-y-4">
      <FeedbackTable />
     </div>
    )}
   </div>
  </div>
 );
};

import { Loading } from "@/components/loading/Loading";
import { FetchErrorAlert } from "@/components/notification/FetchErrorAlert";
import { FeedbackTable } from "@/components/table/FeedbackTable";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useFeedback } from "@/hooks/query/feedback/useFeedback";

export const Feedback = () => {
 const { data: feedbacks, isLoading, isError } = useFeedback();

 return (
  <div>
   <div>
    <div className="flex justify-between items-center mb-1">
     <h1 className="text-3xl font-semibold">Hytteboka</h1>
     <Button>Skriv i boka</Button>
    </div>
    <Separator />

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
  </div>
 );
};

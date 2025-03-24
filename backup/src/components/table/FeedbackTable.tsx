import { useFeedback } from "@/hooks/query/feedback/useFeedback";
import { AlertTriangle } from "lucide-react";

export const FeedbackTable = () => {
 const { data: feedbacks, isError, isLoading } = useFeedback();

 if (isLoading) {
  return <div className="p-4 text-muted-foreground">Laster tilbakemeldinger...</div>;
 }

 if (isError) {
  return (
   <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded flex items-center gap-2">
    <AlertTriangle className="w-5 h-5" />
    Noe gikk galt ved henting av data.
   </div>
  );
 }

 if (!feedbacks || feedbacks.length === 0) {
  return (
   <div className="bg-orange-100 border border-orange-300 text-orange-800 px-4 py-3 rounded flex items-center gap-2">
    <AlertTriangle className="w-5 h-5" />
    Ingen tilbakemeldinger funnet.
   </div>
  );
 }

 return (
  <div className="overflow-x-auto rounded-lg border bg-white shadow-sm">
   <table className="min-w-full text-sm">
    <thead className="bg-muted/50 border-b text-muted-foreground">
     <tr>
      <th className="text-left px-4 py-2 font-medium">Tittel</th>
      <th className="text-left px-4 py-2 font-medium">Melding</th>
      <th className="text-left px-4 py-2 font-medium">Tagger</th>
      <th className="text-left px-4 py-2 font-medium">Opprettet</th>
      <th className="text-left px-4 py-2 font-medium">Opprettet av</th>
     </tr>
    </thead>
    <tbody className="divide-y">
     {feedbacks.map((fb) => (
      <tr key={fb.id} className="hover:bg-muted/40">
       <td className="px-4 py-2">{fb.title}</td>
       <td className="px-4 py-2">{fb.content}</td>
       <td className="px-4 py-2">{fb.tags?.join(", ") || "-"}</td>
       <td className="px-4 py-2">{fb.createdAt}</td>
       <td className="px-4 py-2">{fb.createdBy}</td>
      </tr>
     ))}
    </tbody>
    <tfoot>
     <tr>
      <td colSpan={5} className="px-4 py-4 text-center text-sm text-muted-foreground">
       {/* Pagination placeholder */}
       Side 1 av 1
      </td>
     </tr>
    </tfoot>
   </table>
  </div>
 );
};

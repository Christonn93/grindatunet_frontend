import { useNewsletters } from "@/hooks/query/newsletter/useNewsletters";
import { Loading } from "../loading/Loading";
import { FetchErrorAlert } from "../notification/FetchErrorAlert";
import { Newsletter } from "@/types/newsletter";

export const NewsletterList = () => {
 const { data: newsletters, isLoading, error } = useNewsletters();

 if (isLoading) return <Loading />;
 if (error) return <FetchErrorAlert message={String(error.message)} />;
 if (!newsletters) return <p>No newsletters found.</p>;

 return (
  <>
   {newsletters?.length ? (
    <ul className="space-y-2">
     {newsletters.map((newsletter: Newsletter) => (
      <li key={newsletter.id} className="p-3 hover:border hover:rounded hover:shadow hover:bg-gray-50 ">
       <h3 className="text-lg font-medium">{newsletter.title}</h3>
       <p className="text-gray-600">{newsletter.content}</p>
       <p className="text-sm text-gray-400">Created on: {new Date(newsletter.published_at).toLocaleDateString()}</p>
      </li>
     ))}
    </ul>
   ) : (
    <p>No newsletters found.</p>
   )}
  </>
 );
};

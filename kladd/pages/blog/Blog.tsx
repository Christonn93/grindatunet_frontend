import { Card, CardContent } from "@/components/ui/card";
import { useFetchGuestReviews } from "@/hooks/query/blog/useFetchGuestReviews";
import { format } from "date-fns";

export const Blog = () => {
 const { data: posts, isLoading, isError } = useFetchGuestReviews();

 if (isLoading) return <p className="text-center">Laster anmeldelser...</p>;
 if (isError) return <p className="text-center text-red-500">Kunne ikke laste anmeldelser.</p>;

 if (!posts || posts.length === 0) return <p className="text-center text-gray-600">Ingen anmeldelser tilgjengelig.</p>;

 return (
  <div className="max-w-4xl mx-auto py-8">
   <h2 className="text-2xl font-semibold text-gray-800 mb-6">Gjesteanmeldelser</h2>

   <div className="space-y-6">
    {posts.map((post: any) => (
     <Card key={post.id} className="shadow-md border border-gray-200 rounded-xl">
      <CardContent className="p-4">
       <h3 className="text-lg font-bold text-gray-900">{post.title.rendered}</h3>
       <p className="text-sm text-gray-600 mb-3">{format(new Date(post.date), "dd.MM.yyyy")}</p>
       <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </CardContent>
     </Card>
    ))}
   </div>
  </div>
 );
};

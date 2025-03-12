import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

const WP_API_URL = "https://wp.grindatunet.no/wordpress/wp-json/wp/v2/posts";

const fetchPosts = async () => {
 const { data } = await axios.get(WP_API_URL);
 return data;
};

export const CabinNews = () => {
 const {
  data: posts,
  isLoading,
  isError,
 } = useQuery({
  queryKey: ["cabinNews"],
  queryFn: fetchPosts,
 });

 if (isLoading) return <p className="text-center">Laster nyheter...</p>;
 if (isError) return <p className="text-center text-red-500">Kunne ikke laste nyheter.</p>;

 console.log(posts);

 if (!posts)
  return (
   <Alert>
    <Terminal className="h-4 w-4" />
    <AlertTitle>Heads up!</AlertTitle>
    <AlertDescription>You can add components and dependencies to your app using the cli.</AlertDescription>
   </Alert>
  );

 return (
  <div className="max-w-4xl mx-auto py-8">
   <h2 className="text-2xl font-semibold text-gray-800 mb-6">Nyheter</h2>

   <div className="space-y-6">
    {/* {posts.map((post: any) => (
     <Card key={post.id} className="shadow-md border border-gray-200 rounded-xl">
      <CardContent className="p-4">
       <h3 className="text-lg font-bold text-gray-900">{post.title.rendered}</h3>

       <div className="flex items-center text-gray-600 text-sm my-2">
        <Calendar className="w-4 h-4 mr-1" />
        {format(new Date(post.date), "dd.MM.yyyy")}
       </div>

       <p className="text-gray-700 mb-3" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />

       <a href={post.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium inline-flex items-center hover:underline">
        Les mer <ArrowRight className="w-4 h-4 ml-1" />
       </a>
      </CardContent>
     </Card>
    ))} */}
   </div>
  </div>
 );
};

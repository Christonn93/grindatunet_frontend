import { Card, CardContent } from "@/components/ui/card";
import { usePost } from "@/hooks/query/blog/usePost";
import { format } from "date-fns";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const Blogpost = () => {
 const { data: post, isLoading, isError } = usePost();

 if (isLoading) return <p className="text-center">Laster inn...</p>;
 if (isError) return <p className="text-center text-red-500">Kunne ikke laste innlegget.</p>;
 if (!post) return <p className="text-center">Innlegget finnes ikke.</p>;

 return (
  <div className="max-w-3xl mx-auto py-8">
   <Link to="/minside" className="text-blue-600 font-medium flex items-center hover:underline mb-4">
    <ArrowLeft className="w-4 h-4 mr-2" /> Tilbake til nyheter
   </Link>

   <Card className="shadow-lg border border-gray-200 rounded-xl">
    <CardContent className="p-6">
     <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title.rendered}</h1>
     <p className="text-gray-600 text-sm mb-4">Publisert: {format(new Date(post.date), "dd.MM.yyyy")}</p>

     <div className="text-gray-800 leading-relaxed" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </CardContent>
   </Card>
  </div>
 );
};

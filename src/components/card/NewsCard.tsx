import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type NewsItem = {
 id: number;
 title: string;
 content: string;
 date: string;
};

export const NewsCard = ({ news }: { news: NewsItem }) => {
 return (
  <Card className="w-full max-w-md p-4 shadow-lg rounded-2xl bg-white">
   <CardHeader>
    <CardTitle className="text-xl font-semibold">{news.title}</CardTitle>
   </CardHeader>
   <CardContent>
    {/* Render HTML safely */}
    <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: news.content }} />
    <p className="mt-4 text-sm text-gray-500">Published: {new Date(news.date).toLocaleDateString()}</p>
   </CardContent>
  </Card>
 );
};

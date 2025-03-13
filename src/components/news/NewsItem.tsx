import { formatDistanceToNow } from "date-fns";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export interface NewsItemProps {
 news: {
  id: string;
  title: string;
  date: string;
  content: string;
  author?: string;
 };
}

export function NewsItem({ news }: NewsItemProps) {
 const formattedDate = formatDistanceToNow(new Date(news.date), { addSuffix: true });

 return (
  <Card className="h-full flex flex-col hover:shadow-lg transition-shadow bg-white">
   <CardHeader>
    <CardTitle className="line-clamp-2">{news.title}</CardTitle>
    <p className="text-sm ">
     {formattedDate}
     {news.author && ` • by ${news.author}`}
    </p>
   </CardHeader>
   <CardContent className="flex-grow">
    <div className="text-black" dangerouslySetInnerHTML={{ __html: news.content }} />
   </CardContent>
   <CardFooter>
    <Link to={`/news/${news.id}`}>
     <Button variant="outline" className="w-full">
      Read More <ChevronRight className="ml-2 h-4 w-4" />
     </Button>
    </Link>
   </CardFooter>
  </Card>
 );
}

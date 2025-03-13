import { useNews } from "@/hooks/query/news/useNewsLetter";
import { NewsCard } from "../card/NewsCard";

type NewsItem = {
 id: number;
 title: string;
 content: string;
 date: string;
};

export const NewsList = () => {
 const { data: news, isLoading, error } = useNews();

 if (isLoading) return <p>Loading news...</p>;
 if (error) return <p>Error fetching news.</p>;

 return (
  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
   {(news as NewsItem[]).map((item: NewsItem) => (
    <NewsCard key={item.id} news={item} />
   ))}
  </div>
 );
};

import { NewsItem, NewsItemProps } from "@/components/news/NewsItem";
import { NewsSkeletonLoader } from "@/components/news/NewsSkeletonLoader";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNews } from "@/hooks/query/news/useNewsLetter";

export function NewsContent() {
 const { data, isLoading, isError, error, refetch } = useNews();

 if (isLoading) {
  return <NewsSkeletonLoader />;
 }

 if (isError) {
  return (
   <Alert variant="destructive" className="mb-6">
    <AlertCircle className="h-4 w-4" />
    <AlertTitle>Error</AlertTitle>
    <AlertDescription>
     Failed to load news. {error?.message}
     <Button variant="outline" size="sm" className="ml-2" onClick={() => refetch()}>
      <RefreshCw className="mr-2 h-4 w-4" /> Try Again
     </Button>
    </AlertDescription>
   </Alert>
  );
 }

 if (!data || data.length === 0) {
  return (
   <div className="text-center py-12">
    <h2 className="text-xl font-semibold mb-2">No News Available</h2>
    <p className="text-muted-foreground">Check back later for updates.</p>
   </div>
  );
 }

 return (
  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
   {data.map((newsItem: NewsItemProps) => (
    <NewsItem key={newsItem.news.id} news={newsItem.news} />
   ))}
  </div>
 );
}

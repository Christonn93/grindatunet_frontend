import { Suspense } from "react";
import { NewsContent } from "@/components/news/NewsContent";
import { NewsSkeletonLoader } from "@/components/news/NewsSkeletonLoader";

export const News = () => {
 return (
  <main className="container mx-auto px-4 py-8">
   <h1 className="text-3xl font-bold mb-8 text-center sm:text-left">Latest News</h1>
   <Suspense fallback={<NewsSkeletonLoader />}>
    <NewsContent />
   </Suspense>
  </main>
 );
};

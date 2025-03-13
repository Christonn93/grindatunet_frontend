import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function NewsSkeletonLoader() {
 return (
  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
   {Array.from({ length: 6 }).map((_, index) => (
    <Card key={index} className="h-full flex flex-col">
     <CardHeader>
      <Skeleton className="h-6 w-3/4 mb-2" />
      <Skeleton className="h-4 w-1/3" />
     </CardHeader>
     <CardContent className="flex-grow">
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-3/4" />
     </CardContent>
     <CardFooter>
      <Skeleton className="h-10 w-full" />
     </CardFooter>
    </Card>
   ))}
  </div>
 );
}

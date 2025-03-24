import { useFetchGuestReviews } from "@/hooks/query/blog/useFetchGuestReviews";

export const GuestReview = () => {
 const { data, isError, isLoading } = useFetchGuestReviews();

 if (isLoading) {
  return <div>Loading...</div>;
 }

 if (isError) {
  return <div>Error</div>;
 }

 if (!data) {
  return <div>No data</div>;
 }

 return <></>;
};

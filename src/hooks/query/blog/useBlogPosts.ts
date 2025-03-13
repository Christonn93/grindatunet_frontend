import { fetchPostById } from "@/service/post/fetchPostById";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export const usePost = () => {
 const { id } = useParams<{ id: string }>();

 const { data, isLoading, isError } = useQuery({
  queryKey: ["post", id],
  queryFn: () => fetchPostById(id!),
  enabled: !!id,
 });

 return { data, isLoading, isError };
};

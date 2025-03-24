import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useNewsletterStore } from "@/hooks/store/newsletterStore";
import { fetchNewsletters } from "@/service/newsletter/fetchNewsletters";
import { createNewsletter } from "@/service/newsletter/createNewsletter";

export const useNewsletters = () => {
 const setNewsletters = useNewsletterStore((state) => state.setNewsletters);

 return useQuery({
  queryKey: ["newsletters"],
  queryFn: fetchNewsletters,
  select: (data) => {
   setNewsletters(data);
   return data;
  },
 });
};

export const useCreateNewsletter = () => {
 const queryClient = useQueryClient();

 return useMutation({
  mutationFn: createNewsletter,
  onSuccess: () => {
   queryClient.invalidateQueries({ queryKey: ["newsletters"] });
  },
  onError: (error: Error) => {
   console.error("Error creating newsletter:", error);
  },
 });
};

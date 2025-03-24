import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import { createFeedback, fetchFeedbacks } from "@/service/feedback/feedbackService";
import { useFeedbackStore } from "@/hooks/store/useFeedbackStore";

export const useFeedback = () => {
 const setFeedback = useFeedbackStore((state) => state.setFeedback);

 return useQuery({
  queryKey: ["feedback"],
  queryFn: fetchFeedbacks,
  select: (data) => {
   setFeedback(data);
   return data;
  },
 });
};

export const useCreateFeedback = () => {
 const queryClient = useQueryClient();

 return useMutation({
  mutationFn: createFeedback,
  onSuccess: () => {
   queryClient.invalidateQueries({ queryKey: ["feedback"] });
  },
 });
};

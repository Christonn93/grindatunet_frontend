import { Feedback } from "@/service/feedback/feedbackService";
import { create } from "zustand";

type FeedbackState = {
 feedback: Feedback[];
 setFeedback: (newsletters: Feedback[]) => void;
};

export const useFeedbackStore = create<FeedbackState>((set) => ({
 feedback: [],
 setFeedback: (feedback) => set({ feedback }),
}));

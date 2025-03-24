import { Newsletter } from "@/types/newsletter";
import { create } from "zustand";

type NewsletterState = {
 newsletters: Newsletter[];
 setNewsletters: (newsletters: Newsletter[]) => void;
};

export const useNewsletterStore = create<NewsletterState>((set) => ({
 newsletters: [],
 setNewsletters: (newsletters) => set({ newsletters }),
}));

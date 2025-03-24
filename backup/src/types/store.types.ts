export type User = {
 username: string;
 email: string;
 banner: string;
 avatar: string;
 accessToken: string;
} | null;

export type AuthState = {
 user: User;
 token: string | null;
 login: (userData: NonNullable<User>) => void;
 logout: () => void;
};

export type PostDraftState = {
 title: string;
 body: string;
 tags: string;
 media: string;
 setTitle: (title: string) => void;
 setBody: (body: string) => void;
 setTags: (tags: string) => void;
 setMedia: (media: string) => void;
 clearDraft: () => void;
};

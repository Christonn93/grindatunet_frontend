export type GuestbookEntry = {
 id: number;
 name: string;
 message: string;
 created_at: string;
};

export type GuestbookPayload = {
 name: string;
 message: string;
};

export type Payment = {
 id: number;
 booking_id: number;
 amount: number;
 paid_at: string;
};

export type PaymentPayload = {
 booking_id: number;
 amount: number;
};

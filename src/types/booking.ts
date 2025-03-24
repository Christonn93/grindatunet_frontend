type BookingStatus = "confirmed" | "pending" | "completed" | "canceled";

export type HytteBookingRequest = {
 id: number;
 guest_name: string;
 guest_email: string;
 guest_phone: string;
 guest_amount: number;
 date_from: string;
 date_to: string;
 total_amount: number;
 status: BookingStatus;
 created_at: string;
 updated_at: string;
};

export type BookingPayload = {
 user_id: number;
 cabin_id: number;
 start_date: string;
 end_date: string;
};

export type Price = {
 id: number;
 season: string;
 amount: number;
};

export type PricePayload = {
 season: string;
 amount: number;
};

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

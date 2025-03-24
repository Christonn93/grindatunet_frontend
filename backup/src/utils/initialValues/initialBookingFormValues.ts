export type BookingFormValues = {
 firstName: string;
 lastName: string;
 email: string;
 phone: string;
 guests: number;
 startDate: Date | null;
 endDate: Date | null;
 startTime: string;
 endTime: string;
 purpose: string;
 termsAccepted: boolean;
 notes: string;
};

export const initialBookingFormValues: BookingFormValues = {
 firstName: "",
 lastName: "",
 email: "",
 phone: "",
 guests: 1,
 startDate: null,
 endDate: null,
 startTime: "15:00",
 endTime: "12:00",
 purpose: "pleasure",
 termsAccepted: false,
 notes: "",
};

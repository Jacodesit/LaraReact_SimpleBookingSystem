export type Booking = {
    id: number;
    name: string;
    booking_date: string | null;
    status: 'pending' | 'confirmed' | 'cancelled';
    created_at: string;
    updated_at: string;
}

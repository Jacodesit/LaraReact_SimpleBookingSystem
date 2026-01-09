import { useForm } from "@inertiajs/react"
import { toast } from "react-hot-toast";
import { useRoute } from '../../../vendor/tightenco/ziggy';

import type { Booking } from "@/types/booking";

type PageProps = {
    booking: Booking
    onSuccess: () => void
}

export default function EditBookingForm({ onSuccess, booking }:PageProps ) {
    const { data, setData, put, errors, processing } = useForm({
        name: booking.name,
        booking_date: booking.booking_date,
    });

    const route = useRoute();

    function submit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        put(route('bookings.update', {booking: booking.id}), {
            onSuccess: () => {
                onSuccess();
                toast.success('Yay! Booking editted successfully!');
            }
        })
    }

    return (
        <div className="">
            <form onSubmit={submit}>
                <div className="flex flex-col gap-4">
                    {/* Name */}
                    <div>
                        <label
                            htmlFor="Name"
                            className="block mb-2 text-xs font-medium"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            name="name"
                            id="name"
                            className="w-full border p-3 rounded text-sm focus:outline-none focus:border-blue-500 focus:ring-2  focus:ring-blue-200"
                            placeholder="John Doe"
                        />

                        { errors.name && <p className="errors text-xs text-red-700"> {errors.name} </p>}
                    </div>

                    {/* Booking date  */}
                    <div>
                        <label
                            htmlFor="bookingdate"
                            className="block mb-2 text-xs font-medium"
                        >
                            Booking Date
                        </label>
                        <input
                            type="date"
                            value={data.booking_date ?? ''}
                            onChange={(e) => setData('booking_date', e.target.value)}
                            name="booking_date"
                            id="booking_date"
                            className="w-full border p-3 rounded text-sm focus:outline-none focus:border-blue-500 focus:ring-2  focus:ring-blue-200"
                        />

                        { errors.booking_date && <p className="errors text-xs text-red-700"> {errors.booking_date} </p>}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={processing}
                        className={`mt-5 border py-2 px-4 rounded font-medium cursor-pointer transition-all duration-300 ${
                            processing
                                ? 'bg-gray-300 cursor-not-allowed'
                                : 'hover:bg-blue-500 hover:text-white'
                        }`}
                    >
                        { processing ? 'Editing Booking...' : 'Edit Booking'}
                    </button>
                </div>
            </form>
        </div>
    )
}

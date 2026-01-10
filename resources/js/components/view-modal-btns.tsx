import { router } from '@inertiajs/react'
import { useRoute } from '../../../vendor/tightenco/ziggy'

import type { Booking } from "@/types/booking"
import toast from 'react-hot-toast'

type PageProps = {
    booking: Booking
    onSuccess: () => void
}

export default function ViewActionBtns({ booking, onSuccess }:PageProps) {
    const route = useRoute()

    const handleConfirm = (bookingId: number) => {
        router.put(
            route('booking.update.status', {booking: bookingId}),
            {
                status: 'confirmed'
            },
            {
                onSuccess: () => {
                    onSuccess();
                    toast.success('Yay! Booking confirmed successfully!')
                }
            }
        )
    }

    const handleCancel = (bookingId: number) => {
        router.put(
            route('booking.update.status', {booking: bookingId}),
            {
                status: 'cancelled'
            },
            {
                onSuccess: () => {
                    onSuccess();
                    toast.success('Aww! Booking successfully cancelled!')
                }
            }

        )
    }

    return (
        <div className="p-10 flex gap-2 mt-22">
            <button
                onClick={() => handleConfirm(booking.id)}
                className="flex-1 py-3 rounded border border-green-500 text-green-500 transition-all duration-300 hover:bg-green-500 hover:text-white hover:cursor-pointer"
            >
                Confirm Booking
            </button>

            <button
                onClick={() => handleCancel(booking.id)}
                className="flex-1 py-3 rounded border border-red-500 text-red-500 transition-all duration-300 hover:bg-red-500 hover:text-white hover:cursor-pointer"
            >
                Cancel Booking
            </button>
        </div>
    )
}

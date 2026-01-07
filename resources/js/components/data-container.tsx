import { Plane } from 'lucide-react';

import NoData from "./no-data"

import type { Booking } from "@/types/booking"

type DataContainerProps = {
    bookings: Booking[]
    headline: string
    subtext: string
}

export default function DataContainer({ bookings, headline, subtext }:DataContainerProps) {

    const statusColorCoding = {
        pending: 'bg-amber-100 text-amber-900',
        confirmed: 'bg-green-100 text-green-900',
        cancelled: 'bg-red-100 text-red-900 border'
    }

    const cardColor = {
        pending: 'bg-amber-50 border border-amber-500',
        confirmed: 'bg-green-50 border border-green-500',
        cancelled: 'bg-red-50 border border-red-500'
    }
    return (
        <div
        >
            {bookings.length === 0 ? (
                <NoData />
            ) : (
                <main className="flex flex-col gap-5">
                    <div className="pt-25">
                        <h1 className="text-4xl font-medium font-[Poppins]">{headline}</h1>
                        <p className="text-gray-500">{subtext}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-5 ">
                        {bookings.map(booking => (
                            <div
                                key={booking.id}
                                className={`border flex gap-6 items-center p-6 rounded-md ${cardColor[booking.status]}`}
                            >
                                <div className='bg-blue-400 p-2 rounded'>
                                    <Plane color='white' />
                                </div>

                                <div className="w-full">
                                    <div className="flex justify-between items-center">
                                        <h1 className="font-medium text-2xl font-[Poppins]">{booking.name}</h1>
                                        <p className={`capitalize text-xs py-1 px-2 font-bold rounded ${statusColorCoding[booking.status]}`}>
                                            {booking.status}
                                        </p>
                                    </div>
                                    <div className="mt-1">
                                        <p
                                            className={`text-xs text-gray-500`}
                                        >
                                            Booked On: {booking.booking_date}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            )}
        </div>
    )
}

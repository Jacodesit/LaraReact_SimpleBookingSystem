import { useState } from 'react';
import { Plane } from 'lucide-react';

import NoData from "./no-data"
import ActionBtns from './action-btns';

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

    const [statusFilter, setStatusFilter] = useState<'all' | 'pending' | 'confirmed' | 'cancelled'>('all');

    const filteredStatus = bookings.filter(booking => {
        if(statusFilter === 'all') return true;
        return booking.status === statusFilter;
    })

    return (
        <div
            className=''
        >
            {bookings.length === 0 ? (
                <NoData />
            ) : (
                <main className="flex flex-col gap-5 py-25">
                    <div className="">
                        <h1 className="text-4xl font-medium font-[Poppins]">{headline}</h1>
                        <p className="text-gray-500">{subtext}</p>
                    </div>
                    <div className='flex gap-2'>
                        {/* All */}
                        <button
                            onClick={() => setStatusFilter('all')}
                            className={`px-5 py-1 rounded transition-all duration-300 hover:cursor-pointer text-xs ${statusFilter === 'all' ?
                                'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-blue-400 hover:text-white'
                            }`}
                        >
                            All
                        </button>

                        {/* Pending */}
                        <button
                            onClick={() => setStatusFilter('pending')}
                            className={`px-5 py-1 rounded transition-all duration-300 hover:cursor-pointer text-xs ${statusFilter === 'pending' ?
                                'bg-amber-100 text-amber-700' : 'bg-gray-200 hover:bg-amber-400 hover:text-white'
                            }`}
                        >
                            Pending
                        </button>

                        {/* Confirmed */}
                        <button
                            onClick={() => setStatusFilter('confirmed')}
                            className={`px-5 py-1 rounded transition-all duration-300 hover:cursor-pointer text-xs ${statusFilter === 'confirmed' ?
                                'bg-green-100 text-green-700' : 'bg-gray-200 hover:bg-green-400 hover:text-white'
                            }`}
                        >
                            Confirmed
                        </button>

                        {/* Cancelled */}
                        <button
                            onClick={() => setStatusFilter('cancelled')}
                            className={`px-5 py-1 rounded transition-all duration-300 hover:cursor-pointer text-xs ${statusFilter === 'cancelled' ?
                                'bg-red-100 text-red-700' : 'bg-gray-200 hover:bg-red-400 hover:text-white'
                            }`}
                        >
                            Cancelled
                        </button>
                    </div>

                    <div className="grid grid-cols-3 gap-5 ">
                        {filteredStatus.map(booking => (
                            <div
                                key={booking.id}
                                className={`border flex gap-6 items-center rounded-md ${cardColor[booking.status]}`}
                            >
                                <div className='flex flex-col gap-5'>
                                    <img
                                        src="/Backgrounds/placeholder.jpg"
                                        alt=""
                                        className='rounded-md'
                                    />

                                    <div className='flex flex-col gap-1'>
                                        <div className='flex items-center gap-5 px-4 pb-4'>
                                            <div className='bg-blue-400 p-2 rounded'>
                                                <Plane color='white' />
                                            </div>

                                            <div className="w-full">
                                                <div className="flex justify-between items-center">
                                                    <h1 className="font-medium text-lg font-[Poppins]">{booking.name}</h1>
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
                                        <ActionBtns
                                            booking={booking}
                                        />
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

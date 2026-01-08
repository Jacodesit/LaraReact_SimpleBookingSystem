import { useState } from 'react';

import { Plane } from 'lucide-react';

import NoData from "./no-data"
import ActionBtns from './action-btns';
import ViewBookingModal from './view-modal';
import EditModal from './edit-modal';

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

    // View
    const [ openDetails, setOpenDetails ] = useState(false);
    const [ selectedBooking, setSelectedBooking ] = useState<Booking | null>(null)

    // Edit
    // const [ openEdit, setOpenEdit ] = useState(false);

    const openDetailsModal = (booking: Booking) => {
        setSelectedBooking(booking)
        setOpenDetails(true);
    }

    // const openEditModal = (booking: Booking) => {
    //     setSelectedBooking(booking)
    //     setOpenEdit(true);
    // }
    return (
        <div
            className='py-25'
        >
            {bookings.length === 0 ? (
                <NoData />
            ) : (
                <main className="flex flex-col gap-5">
                    <div className="">
                        <h1 className="text-4xl font-medium font-[Poppins]">{headline}</h1>
                        <p className="text-gray-500">{subtext}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-5 ">
                        {bookings.map(booking => (
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
                                                    <h1 className="font-medium text-xl font-[Poppins]">{booking.name}</h1>
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
                                            onClick={() => openDetailsModal(booking)}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            )}

            <ViewBookingModal
                booking={selectedBooking}
                openDetails={openDetails}
                onClose={() => setOpenDetails(false)}
            />

            <EditModal

            />
        </div>
    )
}

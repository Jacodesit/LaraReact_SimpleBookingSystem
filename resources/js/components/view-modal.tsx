import { CircleX } from "lucide-react"

import { Booking } from "@/types/booking"

type PageProps = {
    booking: Booking | null
    openDetails: boolean
    onClose: () => void
}

export default function ViewBookingModal({ openDetails, booking, onClose }:PageProps) {
    if(!booking || !openDetails) return null

    const statusColorCoding = {
        pending: 'bg-amber-100 text-amber-900',
        confirmed: 'bg-green-100 text-green-900',
        cancelled: 'bg-red-100 text-red-900 border'
    }

    const headline = 'Booking Details'

    return (
        <div className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center p-4 z-[500]">
            <div className="bg-slate-100 rounded-lg max-w-xl w-full max-h-[90vh] flex flex-col">
                <div className="relative">
                    <button
                        onClick={onClose}
                        className="absolute right-5 top-4 hover:cursor-pointer"
                    >
                        <CircleX color="white"/>
                    </button>
                    <img
                        src="/Backgrounds/placeholder.jpg"
                        alt={booking.name}
                        className="rounded-lg w-full"
                    />
                </div>
                <div className="p-8">
                    <h1 className="text-xl font-[Poppins] font-medium text-blue-500 mb-5">{headline}</h1>
                    <div className="grid grid-cols-2 gap-5">
                        <div>
                            <p className="text-xs font-medium mb-1">ID</p>
                            <p className="bg-gray-300 p-2 rounded text-sm">{booking.id}</p>
                        </div>
                        <div>
                            <p className="text-xs font-medium mb-1">Name</p>
                            <p className="bg-gray-300 p-2 rounded text-sm" tex->{booking.name}</p>
                        </div>
                        <div>
                            <p className="text-xs font-medium mb-1">Status</p>
                            <p className={`capitalize text-xs p-2 font-bold rounded inline-block ${statusColorCoding[booking.status]}`}>
                                {booking.status}
                            </p>
                        </div>
                        <div>
                            <p className="text-xs font-medium mb-1">Booking Date</p>
                            <p className="bg-gray-300 p-2 rounded text-sm">{booking.booking_date}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

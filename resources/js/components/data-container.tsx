import React from "react"

import NoData from "./no-data"

import type { Booking } from "@/types/booking"

type DataContainerProps = {
    bookings: Booking[]
}

export default function DataContainer({ bookings }:DataContainerProps) {

    return (
        <div
        >
            {bookings.length === 0 ? (
                <NoData />
            ) : (
                <div className="grid grid-cols-3 gap-5 py-25">
                    {bookings.map(booking => (
                        <div
                            key={booking.id}
                            className="border"
                        >
                            <h1>{booking.name}</h1>
                            <p>{booking.status}</p>
                            <p>{booking.booking_date}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

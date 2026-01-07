import MainLayout from "@/layouts/main-layout"
import DataContainer from "@/components/data-container"

import type { Booking } from "@/types/booking"

type HomeProps = {
    bookings: Booking[]
}

export default function Home({ bookings }:HomeProps) {
    const headline = 'Scheduled Bookings'
    const subtext = 'Track every booking you made.'
    return (
        <MainLayout>
            <DataContainer
                headline={headline}
                subtext={subtext}
                bookings={bookings}
            />
        </MainLayout>
    )
}

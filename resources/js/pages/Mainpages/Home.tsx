import MainLayout from "@/layouts/main-layout"
import DataContainer from "@/components/data-container"

import type { Booking } from "@/types/booking"

type HomeProps = {
    bookings: Booking[]
}

export default function Home({ bookings }:HomeProps) {
    return (
        <MainLayout>
            <DataContainer
                bookings={bookings}
            />
        </MainLayout>
    )
}

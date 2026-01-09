import { Eye } from "lucide-react"
import { SquarePen } from "lucide-react"
import { Trash } from "lucide-react"

import type { Booking } from "@/types/booking"
import { useState } from "react"

import ViewBookingModal from "./view-modal"
import EditModal from "./edit-modal"

type PageProps = {
    booking: Booking
}

export default function ActionBtns({ booking }: PageProps) {

    // View
    const [openDetails, setOpenDetails] = useState(false);
    const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

    // Edit
    const [openEdit, setOpenEdit] = useState(false)

    // View
    const openDetailsModal = (booking: Booking) => {
        setSelectedBooking(booking)
        setOpenDetails(true);
    }

    // Edit
    const openEditModal = (booking: Booking) => {
        setSelectedBooking(booking)
        setOpenEdit(true);
    }

    return (
        <div>
            <div className="flex gap-1 justify-end pb-5 px-4">
                {/* View */}
                <button
                    onClick={() => openDetailsModal(booking)}
                    className="bg-white p-2 rounded-full hover:cursor-pointer"
                >
                    <Eye color="#4299e1" />
                </button>

                {/* Edit */}
                <button
                    onClick={() => openEditModal(booking)}
                    className="bg-white p-2 rounded-full hover:cursor-pointer"
                >
                    <SquarePen color="#48bb78" />
                </button>

                {/* Delete */}
                <button
                    className="bg-white p-2 rounded-full hover:cursor-pointer"
                >
                    <Trash color="#EF4444" />
                </button>
            </div>

            {/* Modals */}
            <ViewBookingModal
                booking={selectedBooking}
                openDetails={openDetails}
                onClose={() => setOpenDetails(false)}
            />

            <EditModal
                booking={selectedBooking}
                openEdit={openEdit}
                onClose={() => setOpenEdit(false)}
            />
        </div>
    )
}

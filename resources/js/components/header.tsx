import { useState } from "react";

import BookingBtn from "./booking-btn";
import BookingModal from "./booking-modal";

import { Link } from "@inertiajs/react"

type HeaderProps = {
    appName: string;
}
export default function Header({appName}: HeaderProps) {
    const currentRoute = window.location.pathname
    const [openModal, setOpenModal] = useState(false);

    const headline = 'New Booking';
    const subtext = 'Select an available date and submit your booking';

    return (
        <header
            className={`px-25 py-5 fixed w-screen flex justify-between items-center ${currentRoute === '/' ? 'border-b-0' : 'border-b bg-white'}`}
        >
            <nav>
                <Link
                    href={'/'}
                    className="text-xl font-semibold font-[Poppins] text-blue-700"
                >
                    {appName}
                </Link>
            </nav>

            <BookingBtn
                onClick={() => setOpenModal(true)}
            />

            <BookingModal
                openModal={openModal}
                onClose={() => setOpenModal(false)}
                headline={headline}
                subtext={subtext}
            />

        </header>
    )
}

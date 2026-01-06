import { CircleX } from "lucide-react";

import BookingForm from "./booking-form";

type PageProps = {
    openModal: boolean;
    onClose: () => void;
    headline: string;
    subtext: string
}

export default function BookingModal({ openModal, onClose, headline, subtext }:PageProps ) {
    if (!openModal) return null;

    return (
        <div className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center p-4 z-[500]">
            <div className="bg-slate-100 rounded-lg max-w-4xl w-full max-h-[90vh] flex">
                <div className="w-1/2 p-5">
                    <div>
                        <img
                            src="/Backgrounds/booking.svg"
                            alt="Booking SVG"
                            className="h-96 flex "
                        />
                    </div>
                </div>
                <div className="w-1/2 bg-white p-5">
                    <div
                        className="flex justify-end"
                    >
                        <button
                            onClick={onClose}
                            className="mb-2 hover:cursor-pointer"
                        >
                            <CircleX size={20} />
                        </button>
                    </div>

                    <div className="flex flex-col gap-10">
                        <div>
                            <h1 className="font-[Poppins] font-medium text-xl">{headline}</h1>
                            <p className="text-gray-500 text-sm">{subtext}</p>
                        </div>

                        <BookingForm />
                    </div>

                </div>

            </div>
        </div>
    )
}

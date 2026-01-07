import { CalendarPlus } from "lucide-react"

type PageProps = {
    onClick: () => void
}

export default function BookingBtn({ onClick }:PageProps ) {
    const currentPage = window.location.pathname
    return (
        <button
            onClick={onClick}
            className={`bg-blue-500 py-2 px-3 rounded text-white flex items-center justify-center gap-1 transition-all duration-300 hover:bg-blue-700 hover:scale-110 hover:cursor-pointer
                ${currentPage === '/home' ? 'block' : 'hidden'}`}
        >
            <CalendarPlus size={20} />
            Book Now!
        </button>
    )
}

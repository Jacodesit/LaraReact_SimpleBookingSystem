export default function NoData0() {

    return (
        <div className="h-screen flex justify-center items-center">
            <div className="flex flex-col text-center gap-3">
                <img
                    src="/SVG/no-data.svg"
                    alt="SVG Icon"
                    className="h-45 "
                />
                <p className="text-gray-500">You have no bookings yet</p>
                {/* <button
                    onClick={() => setIsOpen(true)}
                    className="bg-blue-500 py-2 rounded text-white flex items-center justify-center gap-1 transition-all duration-300 hover:bg-blue-700 hover:scale-110 hover:cursor-pointer"
                >
                    <CalendarPlus size={20} />
                    Book Now!
                </button> */}
            </div>
        </div>
    )
}

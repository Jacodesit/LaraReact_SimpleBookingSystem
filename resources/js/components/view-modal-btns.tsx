export default function ViewActionBtns() {
    return (
        <div className="p-10 flex gap-2 mt-22">
            <button
                className="flex-1 py-3 rounded border border-green-500 text-green-500 transition-all duration-300 hover:bg-green-500 hover:text-white hover:cursor-pointer"
            >
                Confirm Booking
            </button>

            <button
                className="flex-1 py-3 rounded border border-red-500 text-red-500 transition-all duration-300 hover:bg-red-500 hover:text-white hover:cursor-pointer"
            >
                Cancel Booking
            </button>
        </div>
    )
}

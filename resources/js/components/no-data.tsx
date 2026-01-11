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
            </div>
        </div>
    )
}

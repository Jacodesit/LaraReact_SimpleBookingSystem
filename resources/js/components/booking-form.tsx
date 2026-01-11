import { useForm } from "@inertiajs/react"
import { toast } from "react-hot-toast";

type PageProps = {
    onSuccess: () => void
}

const today = new Date().toISOString().split('T')[0];

export default function BookingForm({ onSuccess }:PageProps ) {
    const { data, setData, post, errors, processing, reset } = useForm({
        name: '',
        booking_date: today,
        statue: '',
    });

    function submit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        post('/bookings', {
            onSuccess: () => {
                reset()
                onSuccess();
                toast.success('Yay! Booking created successfully!');
            }
        })
    }

    return (
        <div className="">
            <form onSubmit={submit}>
                <div className="flex flex-col gap-4">
                    {/* Name */}
                    <div>
                        <label
                            htmlFor="Name"
                            className="block mb-2 text-xs font-medium"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            name="name"
                            id="name"
                            className="w-full border p-3 rounded text-sm focus:outline-none focus:border-blue-500 focus:ring-2  focus:ring-blue-200"
                            placeholder="John Doe"
                        />

                        { errors.name && <p className="errors text-xs text-red-700"> {errors.name} </p>}
                    </div>

                    {/* Booking date  */}
                    <div>
                        <label
                            htmlFor="bookingdate"
                            className="block mb-2 text-xs font-medium"
                        >
                            Booking Date
                        </label>
                        <input
                            type="date"
                            min={today}
                            value={data.booking_date}
                            onChange={(e) => setData('booking_date', e.target.value)}
                            name="booking_date"
                            id="booking_date"
                            className="w-full border p-3 rounded text-sm focus:outline-none focus:border-blue-500 focus:ring-2  focus:ring-blue-200"
                        />

                        { errors.booking_date && <p className="errors text-xs text-red-700"> {errors.booking_date} </p>}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={processing}
                        className={`mt-5 border py-2 px-4 rounded font-medium cursor-pointer transition-all duration-300 ${
                            processing
                                ? 'bg-gray-300 cursor-not-allowed'
                                : 'hover:bg-blue-500 hover:text-white'
                        }`}
                    >
                        { processing ? 'Adding Booking...' : 'Add Booking'}
                    </button>
                </div>
            </form>
        </div>
    )
}

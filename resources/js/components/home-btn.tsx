import { Link } from "@inertiajs/react";

import { Home } from "lucide-react";

export default function Homebtn() {
    return (
        <Link
            href={'/home'}
            className="bg-blue-500 px-5 py-3 flex gap-2 items-center text-white rounded"
        >
            <Home size={15} />
            Home
        </Link>

    )
}
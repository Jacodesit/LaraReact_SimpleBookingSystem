

import { Eye } from "lucide-react"
import { SquarePen } from "lucide-react"
import { Trash } from "lucide-react"

type PageProps = {
    onClick: () => void;
}

export default function ActionBtns({ onClick }: PageProps) {

    return (
        <div className="flex gap-1 justify-end pb-5 px-4">
            {/* View */}
            <button
                onClick={onClick}
                className="bg-white p-2 rounded-full hover:cursor-pointer"
            >
                <Eye color="#4299e1" />
            </button>

            {/* Edit */}
            <button
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
    )
}

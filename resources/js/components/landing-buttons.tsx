import React from "react"
import { Link } from "@inertiajs/react"

import { Home } from "lucide-react";
import { Info } from "lucide-react";

type LandingButtonsProps = {
    onClick: () => void;
}

export default function LandingButtons({ onClick }: LandingButtonsProps) {
    return (
        <div className="flex gap-2 justify-start">
            <Link 
                href={'/home'}
                className="bg-blue-500 px-4 py-3 flex items-center gap-2 text-white rounded transtion-all duration-300 hover:bg-blue-700 hover:scale-105 hover:cursor-pointer"
            >   
                <Home size={15} />
                Go to home
            </Link>

            <button
                onClick={(onClick)}
                className="bg-blue-700 px-4 py-3 flex items-center gap-2 text-white rounded transtion-all duration-300 hover:bg-blue-900 hover:scale-105 hover:cursor-pointer"   
            >
                <Info size={16} />
                Behind this project
            </button>
        </div>
    )
}
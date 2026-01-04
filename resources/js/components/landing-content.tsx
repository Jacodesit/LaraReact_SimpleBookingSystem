import { on } from "events";
import LandingButtons from "./landing-buttons"

type Props = {
    headline: string;
    subtext: string;
    onClick: () => void;
}

export default function LandingContent({ headline, subtext, onClick}: Props ) {
    return (
        <div className="px-25 flex gap-5 h-screen z-[90] relative">
            <div className="w-1/2 flex justify-center flex-col gap-15 ">
                <div className="flex items-center justify-center flex-col">
                    <h1 className="text-6xl font-semibold text-blue-500 font-[Poppins] mb-4">{headline}</h1>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto">{subtext}</p> 
                </div>
                <LandingButtons
                    onClick={() => onClick()}
                />
            </div>
            <div className="w-1/2 flex items-center justify-center">
                <img 
                    src="/Backgrounds/booking2.svg" 
                    alt="SVG Illustration" 
                    className="h-full"
                />
            </div>
        </div>
    )
}
import { useState } from "react"

import LandingContent from "@/components/landing-content"
import Header from "@/components/header"
import DevInfo from "@/components/dev-info"

export default function Welcome() {
    const headline = "Take Control of Your Schedule with Ease"
    const subtext = "Our simple booking system lets you create, manage, and track appointments seamlessly, saving you time and keeping everything organized in one place."

    const [ isOpen, setIsOpen ] = useState(false);

    return (
        <div className="min-h-screen w-full relative">
            <Header appName="BookEasy" />
            {/* Dashed Bottom Right Fade Grid */}
            <div
                className="absolute inset-0 z-0"
                style={{
                backgroundImage: `
                    linear-gradient(to right, #e7e5e4 2px, transparent 2px),
                    linear-gradient(to bottom, #e7e5e4 2px, transparent 2px)
                `,
                backgroundSize: "20px 20px",
                backgroundPosition: "0 0, 0 0",
                maskImage: `
                        repeating-linear-gradient(
                        to right,
                        black 0px,
                        black 3px,
                        transparent 3px,
                        transparent 8px
                        ),
                        repeating-linear-gradient(
                        to bottom,
                        black 0px,
                        black 3px,
                        transparent 3px,
                        transparent 8px
                        ),
                        radial-gradient(ellipse 80% 80% at 0% 100%, #000 50%, transparent 90%)
                `,
                WebkitMaskImage: `
                repeating-linear-gradient(
                        to right,
                        black 0px,
                        black 3px,
                        transparent 3px,
                        transparent 8px
                        ),
                        repeating-linear-gradient(
                        to bottom,
                        black 0px,
                        black 3px,
                        transparent 3px,
                        transparent 8px
                        ),
                        radial-gradient(ellipse 80% 80% at 0% 100%, #000 50%, transparent 90%)
                `,
                maskComposite: "intersect",
                WebkitMaskComposite: "source-in",
                }}
            />
            <LandingContent
                headline={headline}
                subtext={subtext}
                onClick={() => setIsOpen(true)}
            />
            
            <DevInfo 
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </div>
    )
}


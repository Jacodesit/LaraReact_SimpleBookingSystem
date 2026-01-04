import { Link } from "@inertiajs/react"

type HeaderProps = {
    appName: string;
}
export default function Header({appName}: HeaderProps) {
    const currentRoute = window.location.pathname
    return (
        <header 
            className={`px-25 py-5 fixed w-screen ${currentRoute === '/' ? 'border-b-0' : 'border-b'}`}
        >
            <nav>
                <Link
                    href={'/'}
                    className="text-xl font-semibold font-[Poppins] text-blue-700"
                >
                    {appName}
                </Link>
            </nav>
        </header>
    )
}
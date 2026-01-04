type FooterProps = {
    footerText1: string;
    footerText2: string;
}

export default function Footer({ footerText1, footerText2 }: FooterProps ) {
    return (
        <footer className="z-[90] flex">
            <p className="text-xs text-gray-500"> {footerText1}</p>
            <p className="text-xs text-gray-500"> {footerText2} </p>
        </footer>
    )
}
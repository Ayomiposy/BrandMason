import { Link } from "@tanstack/react-router"
import Linkedin from "/linkedin.svg"
import Instagram from "/instagram.svg"
import whatsapp from "/whatsapp.svg"

export const Socials = () => {
    return (
        <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/company/brandmason-limited/" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                <img src={Linkedin} alt="Linkedin icon" className="h-8 w-8 brightness-0 invert" />
            </a>
            <a href="https://www.instagram.com/brandmasonlimited?obrf=MXV1ejBpNmV1dTJqbA==" target="_blank" rel="noopener noreferrer" className="cursor-pointer h-8 w-8">
                <img src={Instagram} alt="Instagram icon" className="h-8 w-8 brightness-0 invert" />
            </a>
            <a href="https://wa.me/2349061734096" target="_blank" rel="noopener noreferrer" className="cursor-pointer h-8 w-8">
                <img src={whatsapp} alt="WhatsApp icon" className="h-8 w-8 brightness-0 invert" />
            </a>
        </div>
    )
}
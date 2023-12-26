import Link from "next/link"

export default function SocialIcon({icon, link}) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="bg-white cursor-pointer rounded-lg flex items-center justify-center w-[50px] h-[50px] md:w-[65px] md:h-[65px] md:min-w-[65px] md:min-h-[65px] md:max-w-[65px] md:max-h-[65px]">
            {icon}
        </a>
    )
}
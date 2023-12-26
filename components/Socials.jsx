import Link from "next/link"


// Icons
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { IoMail } from "react-icons/io5";

export default function Socials({type, icon, link}) {

    const scale = "scale-[1.5] md:scale-[2]"

    const socials = {
        linkedin: {
            link: 'https://uk.linkedin.com/in/will-cotton-605ba4226',
            icon: <FaLinkedinIn className={`${scale} text-[var(--turquoise)]`} />,
        },
        twitter: {
            link: 'https://twitter.com/DznWill',
            icon: <FaTwitter className={`${scale} text-[var(--turquoise)] md:text-black`}/>,
        },
        instagram: {
            link: 'https://www.instagram.com',
            icon: <GrInstagram className={`${scale} text-[var(--turquoise)]`}/>,
        },
        mail: {
            link: 'mailto:williamcotton340@gmail.com',
            icon: <IoMail className={`${scale} text-[var(--turquoise)] md:text-[var(--red)]`}/>
        }
    }

    if(!type) {
        console.error('No type specified')
        return null;
    } else {
        const social = socials[type]
        return (
            <a href={social.link} target="_blank" rel="noopener noreferrer" className="bg-white cursor-pointer rounded-lg flex items-center justify-center w-[50px] h-[50px] md:w-[65px] md:h-[65px] md:min-w-[65px] md:min-h-[65px] md:max-w-[65px] md:max-h-[65px]">
                {social.icon}
            </a>
        )
    }
}
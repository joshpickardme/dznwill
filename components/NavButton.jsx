// Imports
import Link from "next/link"
import { usePathname } from "next/navigation"



export default function NavButton({text, link, special, mobile}) {
    const pathname = usePathname();

    if(special) {
        return (
            <Link href={link}><button className={` ${pathname == link ? 'font-semibold' : "font-normal" } text-white rounded-md text-lg bg-[var(--turquoise)] pt-2 pb-2 pl-6 pr-6 h-min hover:cursor-pointer`}>{text}</button></Link>
        )
    } else if(!special && !mobile) {
        return (
            <Link href={link}><button className={` ${pathname == link ? 'font-semibold' : "font-normal" } text-[var(--black)] text-lg  pt-2 pb-2 pl-3 pr-3 h-min hover:cursor-pointer`}>{text}</button></Link>
        )
    } else if(mobile) {
        return (
            <Link href={link}><button className={` ${pathname == link ? 'text-[#CD736F]' : "font-normal" } text-white text-xl  pt-2 pb-2 pl-3 pr-3 h-min hover:cursor-pointer`}>{text}</button></Link>
        )
    }


}
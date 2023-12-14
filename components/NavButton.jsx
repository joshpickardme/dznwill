// Imports
import Link from "next/link"
import { usePathname } from "next/navigation"



export default function NavButton({text, link, special}) {
    const pathname = usePathname();

    if(special) {
        return (
            <Link href={link}><button className={` ${pathname == link ? 'font-semibold' : "font-normal" } text-white rounded-md text-lg bg-[var(--turquoise)] pt-2 pb-2 pl-6 pr-6 h-min`}>{text}</button></Link>
        )
    } else {
        return (
            <Link href={link}><button className={` ${pathname == link ? 'font-semibold' : "font-normal" } text-[var(--black)] text-lg  pt-2 pb-2 pl-3 pr-3 h-min`}>{text}</button></Link>
        )
    }


}
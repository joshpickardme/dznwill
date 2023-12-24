// Imports
import Link from "next/link"
import { usePathname } from "next/navigation"



export default function FooterButton({text = "empty", link = "", special = false, icon = ""}) {
    const pathname = usePathname();

    if(special) {
        return (
            <button className={`text-white bg-[var(--black)] flex flex-row gap-3 items-center rounded-md text-xl pt-2 pb-2 pl-6 pr-3 h-min hover:cursor-pointer`}>{text}{icon}</button>
        )
    } else {
        return (
            <Link href={link}><button className={` ${pathname == link ? 'font-semibold' : "font-normal" } text-white rounded-md text-2xl lg:pt-2 lg:pb-2 lg:pl-6 pl-3 lg:pr-6 pr-3 h-min hover:cursor-pointer`}>{text}</button></Link> 
        )
    }


}
import Image from "next/image"
import FooterButton from "../FooterButton"
import Socials from "../Socials"
import Label from "../Label"
import { useState } from "react"


// Icons

import { FaLinkedinIn } from "react-icons/fa";
import { IoMdArrowDropup } from "react-icons/io";

import { FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

import { IoMail } from "react-icons/io5";



export default function Footer() {

    const [socials, setSocials] = useState(false)

    return (
        <footer className="flex flex-col gap-6 md:gap-0 md:flex-row min-h-[165px] items-center justify-between bg-[var(--turquoise)] -ml-6 -mr-6 lg:-ml-16 lg:-mr-16 md:-ml-8 md:-mr-8 md:pl-8 md:pr-8 lg:pl-16 lg:pr-16">
            <div className="flex flex-col gap-4 pt-8 md:pt-0 md:gap-0 md:flex-row">
                <div className="flex justify-center items-center">
                    <Image className="mr-0 md:mr-4 min-w-[90px] min-h-[90px]" src="/logo_white.png" width={90} height={90}></Image>
                </div>
                <div className="flex items-center md:-ml-8 md:-mr-8 lg:-ml-0 lg:-mr-0">
                    <hr className="border-2 rotate-90 w-[90px] rounded-md hidden md:flex" />
                </div>
                <div className="flex flex-col md:flex-row gap-5 md:gap-3 items-center">
                    <FooterButton text={'home'} link={'/'}></FooterButton>
                    <FooterButton text={'about'} link={'/about'}></FooterButton>
                    <FooterButton text={'work'} link={'/work'}></FooterButton>
                    <FooterButton text={'contact'} link={'/contact'}></FooterButton>
                    
                </div>
            </div>
            <div className="hidden lg:flex bg-black w-[200px]">
                <Label></Label>
            </div>
            <div className="hidden md:flex flex-col lg:hidden justify-center">
                {socials && <Label popup={true}></Label>}
                <button onClick={() => setSocials(!socials)} className={`text-white bg-[var(--black)] flex flex-row gap-3 items-center rounded-md text-2xl md:text-xl pt-2 pb-2 pl-6 pr-3 h-min  hover:cursor-pointer`}>Socials<IoMdArrowDropup className={`${socials ? 'rotate-180' : 'rotate-0'} transition-all`} /></button>
            </div>
            <div className="flex flex-row md:hidden gap-2 pb-6">
                <Socials type={'linkedin'}></Socials>
                <Socials type={'twitter'}></Socials>
                <Socials type={'instagram'}></Socials>
                <Socials type={'mail'}></Socials>
            </div>
        </footer>
    )
}
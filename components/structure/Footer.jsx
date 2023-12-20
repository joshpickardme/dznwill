"use client"
// Imports
import Image from "next/image"
import useScreenSize from "@/lib/UseScreenSize";
import SocialIcon from "../SocialIcon";
import { IoMdArrowDropup } from "react-icons/io";

// Components
import FooterButton from "../FooterButton"
import Label from "../Label"

// Icons
import { FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

import { FaLinkedinIn } from "react-icons/fa";
import { IoMail } from "react-icons/io5";





export default function Footer() {
    const screenSize = useScreenSize();

    // Mobile
    if(screenSize.width < 768) { 
        return (
            <div className="flex flex-row justify-between items-center  bg-[var(--turquoise)] p-10 -ml-6 -mr-6">
                <div className="flex items-center justify-start">
                    <Image className="w-min" src="/logo_white.png" width={60} height={60}></Image>
                </div>
                <div className="flex flex-col justify-center">
                    <FooterButton text={"Home"} link={"/"}></FooterButton>
                </div>
        </div>
        )
    } else if(screenSize.width >= 768 && screenSize.width < 1024) {
        return (
            <div className="flex min-h-[165px] items-center lg:gap-8 bg-[var(--turquoise)] -ml-16 -mr-16">
            <div className="flex justify-center items-center pl-8">
                <Image src="/logo_white.png" className="min-w-[90px] min-h-[90px]" width={90} height={90}></Image>
            </div>
            <div className="flex items-center justify-start">
                <hr className="rotate-90 border-2 w-[118px] -ml-6 -mr-6  rounded-sm" />
                <div className="flex gap-3 lg:gap-6 items-center">
                    <FooterButton text={'home'} link={'/'}></FooterButton>
                    <FooterButton text={'about'} link={'/about'}></FooterButton>
                    <FooterButton text={'work'} link={'/work'}></FooterButton>
                    <FooterButton text={'contact'} link={'/contact'}></FooterButton>
                    <FooterButton icon={<IoMdArrowDropup className="scale-125"></IoMdArrowDropup>} text={'socials'} special={true}></FooterButton>
                </div>
            </div>    
        </div>
        )
    } else if( screenSize.width >= 1024) {
        return (
            <div className="flex min-h-[165px] items-center gap-0 bg-[var(--turquoise)] p-10 -ml-6 -mr-6 md:-ml-16 md:-mr-16">
            <div className="flex justify-center items-center">
                <Image src="/logo_white.png" width={90} height={90}></Image>
            </div>
            <div className="flex items-center justify-start">
                <hr className="rotate-90 border-2 w-[118px] rounded-sm" />
                <div className="flex md:gap-1 lg:gap-6">
                    <FooterButton text={'home'} link={'/'}></FooterButton>
                    <FooterButton text={'about'} link={'/about'}></FooterButton>
                    <FooterButton text={'work'} link={'/work'}></FooterButton>
                    <FooterButton text={'contact'} link={'/contact'}></FooterButton>
                </div>
            </div>
            <Label></Label>        
        </div>
        )
    }


}
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
        return (
            <div className="flex min-h-[165px] w-screen flex-col md:flex-row bg-[var(--turquoise)] p-10 -ml-6 -mr-6 md:-mr-16 md:-ml-16">
                <div className="flex justify-center items-center md:justify-end">
                    <Image src="/logo_white.png" className="w-[120px] h-[120px] md:w-[86px] md:h-[86px] md:max-w-[86px] md:max-h-[86px] md:min-w-[86px]" width={120} height={120}></Image>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-end min-w-full">
                    <hr className="border-2 rotate-90 w-[90px] divide-x-2 rounded-md hidden md:flex" />
                    <div className="flex flex-col md:flex-row gap-12 justify-end w-fullu">
                        <div className="flex flex-col md:flex-row gap-6 items-center">
                            <FooterButton text={'home'} link={'/'}></FooterButton>
                            <FooterButton text={'about'} link={'/about'}></FooterButton>
                            <FooterButton text={'work'} link={'/work'}></FooterButton>
                            <FooterButton text={'contact'} link={'/contact'}></FooterButton>
                        </div>
                        <div className="flex items-center justify-center flex-row gap-3 w-full h-12 md:hidden">
                            <SocialIcon icon={<FaLinkedinIn className="scale-[1.5] text-[var(--turquoise)]"></FaLinkedinIn>}></SocialIcon>
                            <SocialIcon icon={<FaTwitter className="scale-[1.5] text-[var(--turquoise)]"></FaTwitter>}></SocialIcon>
                            <SocialIcon icon={<GrInstagram className="scale-[1.5] text-[var(--turquoise)]"></GrInstagram>}></SocialIcon>
                            <SocialIcon icon={<IoMail className="scale-[1.5] text-[var(--turquoise)]"></IoMail>}></SocialIcon>
                        </div>
                        <div className="hidden md:flex">
                            <Label></Label>
                        </div>
                    </div>
                </div>   
            </div>
        )
}
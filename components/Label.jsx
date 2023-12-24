"use client"
// Imports
import Image from "next/image"
import useScreenSize from "@/lib/UseScreenSize";
import SocialIcon from "./SocialIcon";
import { IoMdArrowDropup } from "react-icons/io";

// Components
import FooterButton from "./FooterButton"

// Icons
import { FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

import { FaLinkedinIn } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function Label() {
    return (
        <div className="absolute bg-[var(--black)] w-[200px] h-[250px] -bottom-[192px] p-4 rounded-t-md">
        <div className="flex flex-col gap-4 min-w-full min-h-full items-center">
            <div className="flex flex-row gap-4">
                {<SocialIcon icon={<FaTwitter className="scale-[2] text-black" />}></SocialIcon>}
                {<SocialIcon icon={<GrInstagram className="scale-[2.5] text-[var(--turquoise)]" />}></SocialIcon>}
            </div>
            <div className="flex flex-row gap-4">
                {<SocialIcon icon={<FaLinkedinIn className="scale-[2] text-[var(--turquoise)]" />}></SocialIcon>}
                {<SocialIcon icon={<IoMail className="scale-[2] text-[var(--red)]" />}></SocialIcon>}
            </div>
        </div>
    </div>       
    )
}
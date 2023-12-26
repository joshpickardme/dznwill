"use client"
// Imports
import Image from "next/image"
import useScreenSize from "@/lib/UseScreenSize";
import SocialIcon from "./SocialIcon";
import { IoMdArrowDropup } from "react-icons/io";
import { motion } from "framer-motion";

// Components
import FooterButton from "./FooterButton"

// Icons
import { FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

import { FaLinkedinIn } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function Label({popup}) {
    if(popup) {
        return (
            <motion.div initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{duration: 0.3}} className="absolute lg:hidden bg-[var(--black)] w-[200px] h-[250px] -bottom-20 right-1 shadow-xl p-4 rounded-md">
                <div className="flex flex-col gap-4 min-w-full min-h-full items-center">
                    <div className="flex flex-row gap-4">
                        {<SocialIcon link={'https://twitter.com/DznWill'} icon={<FaTwitter className="scale-[2] text-black" />}></SocialIcon>}
                        {<SocialIcon link={'https://www.instagram.com'} icon={<GrInstagram className="scale-[2.5] text-[var(--turquoise)]" />}></SocialIcon>}
                    </div>
                    <div className="flex flex-row gap-4">
                        {<SocialIcon link={'https://uk.linkedin.com/in/will-cotton-605ba4226'} icon={<FaLinkedinIn className="scale-[2] text-[var(--turquoise)]" />}></SocialIcon>}
                        {<SocialIcon link={'mailto:williamcotton340@gmail.com'} icon={<IoMail className="scale-[2] text-[var(--red)]" />}></SocialIcon>}
                    </div>
                </div>
            </motion.div>       
        )
    } else {
        return (
            <div className="absolute bg-[var(--black)] w-[200px] h-[250px] -bottom-[192px] p-4 rounded-t-md">
                <div className="flex flex-col gap-4 min-w-full min-h-full items-center">
                    <div className="flex flex-row gap-4">
                        {<SocialIcon link={'https://twitter.com/DznWill'} icon={<FaTwitter className="scale-[2] text-black" />}></SocialIcon>}
                        {<SocialIcon link={'https://www.instagram.com'} icon={<GrInstagram className="scale-[2.5] text-[var(--turquoise)]" />}></SocialIcon>}
                    </div>
                    <div className="flex flex-row gap-4">
                        {<SocialIcon link={'https://uk.linkedin.com/in/will-cotton-605ba4226'} icon={<FaLinkedinIn className="scale-[2] text-[var(--turquoise)]" />}></SocialIcon>}
                        {<SocialIcon link={'mailto:williamcotton340@gmail.com'} icon={<IoMail className="scale-[2] text-[var(--red)]" />}></SocialIcon>}
                    </div>
                </div>
            </div>       
        )
    }

}
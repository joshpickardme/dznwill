"use client"
// Imports
import Image from "next/image"
import useScreenSize from "@/lib/UseScreenSize";
import Socials from "./Socials";
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
                        {<Socials type={'twitter'}></Socials>}
                        {<Socials type={'instagram'}></Socials>}
                    </div>
                    <div className="flex flex-row gap-4">
                        {<Socials type={'linkedin'}></Socials>}
                        {<Socials type={'mail'}></Socials>}
                    </div>
                </div>
            </motion.div>       
        )
    } else {
        return (
            <div className="absolute bg-[var(--black)] w-[200px] h-[250px] -bottom-[192px] p-4 rounded-t-md">
                <div className="flex flex-col gap-4 min-w-full min-h-full items-center">
                    <div className="flex flex-row gap-4">
                        <Socials type={'twitter'}></Socials>
                        <Socials type={'instagram'}></Socials>
                    </div>
                    <div className="flex flex-row gap-4">
                        <Socials type={'linkedin'}></Socials>
                        <Socials type={'mail'}></Socials>
                    </div>
                </div>
            </div>       
        )
    }

}
"use client"

// Icons
import { RxHamburgerMenu } from "react-icons/rx";

// Imports
import Image from "next/image"
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import { motion, useAnimate, useAnimationControls } from "framer-motion";

// Components
import NavButton from "../NavButton"
import useScreenSize from "@/lib/UseScreenSize";
import Hamburger from "../Hamburger";



export default function Header() {
    const screenSize = useScreenSize();
    const [navActive, setNavActive] = useState(false)

    const navControls = useAnimationControls()

    const [scope, animate] = useAnimate()

    useEffect(() => {
        if(navActive) {
            document.body.classList.add("overflow-y-hidden")
            window.scrollTo(0,0)
        } else {
            document.body.classList.remove("overflow-y-hidden")
        }
    }, [navActive])

    function toggleNav(type) {
        if(type === true) {
            setNavActive(type)
            navControls.start({opacity: 0.6})
            
            
        } else if(type === false) {
            setNavActive(type)
            navControls.start({})
            
        } else {
            console.log('invalid type')
        }
    }

    return(
        <header className="flex flex-row justify-between z-10">
            <Image className="z-10" src={navActive ? '/logo_turq.png' : '/logo.png'} width={90} height={90}></Image>
            <div className="hidden md:flex flex-row gap-8 items-center">
                <NavButton text={"home"} link={"/"}></NavButton>
                <NavButton text={"about"} link={"/about"}></NavButton>
                <NavButton text={"work"} link={"/work"}></NavButton>
                <NavButton text={"contact"} link={"/contact"} special={true}></NavButton>
            </div>
            <div className="flex flex-row md:hidden gap-14 z-10 items-center">
                <Hamburger navActive={navActive} setNavActive={toggleNav}></Hamburger>
            </div>
            {navActive && 
            <motion.div initial={{opacity: 0}} animate={{opacity: 0.9}} transition={{duration: 0.1}} className="fixed min-h-screen md:hidden min-w-full bg-black z-0 top-0 left-0 ">
                <div className="flex pl-6 pr-6 pt-40 min-w-full min-h-screen">
                    <div className="flex flex-col gap-3">
                        <motion.span initial={{x: -120}} animate={{x: 0}} transition={{delay: 0}}><NavButton mobile={true} text={'home'} link={"/"}></NavButton></motion.span>
                        <motion.span initial={{x: -120}} animate={{x: 0}} transition={{delay: 0.1}}><NavButton mobile={true} text={'about'} link={"/about"}></NavButton></motion.span>
                        <motion.span initial={{x: -120}} animate={{x: 0}} transition={{delay: 0.2}}><NavButton mobile={true} text={'work'} link={"/work"}></NavButton></motion.span>
                        <motion.span initial={{x: -120}} animate={{x: 0}} transition={{delay: 0.3}}><NavButton mobile={true} text={'contact'} link={"/contact"}></NavButton></motion.span>
                    </div>
                </div>
            </motion.div>}

        </header>
    )
}
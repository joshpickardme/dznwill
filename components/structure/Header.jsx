"use client"

// Icons
import { RxHamburgerMenu } from "react-icons/rx";

// Imports
import Image from "next/image"
import { useState } from "react";

// Components
import NavButton from "../NavButton"
import useScreenSize from "@/lib/UseScreenSize";
import Hamburger from "../Hamburger";



export default function Header() {
    const screenSize = useScreenSize();
    const [navActive, setNavActive] = useState(false)

    // Mobile
    if(screenSize.width < 768) {
        return(
            <header className="flex flex-row justify-between items-center z-10">
                <Image src="/logo.png" width={90} height={90}></Image>
                <div className="flex flex-row gap-14 items-center">
                    <Hamburger navActive={navActive} setNavActive={setNavActive}></Hamburger>
                </div>
            </header>
        )
    }

    // Desktop
    if(screenSize.width >= 768) {
        return(
            <header className="flex flex-row justify-between  z-10">
                <Image src="/logo.png" width={90} height={90}></Image>
                <div className="flex flex-row gap-8 items-center">
                    <NavButton text={"home"} link={"/"}></NavButton>
                    <NavButton text={"about"} link={"/about"}></NavButton>
                    <NavButton text={"work"} link={"/work"}></NavButton>
                    <NavButton text={"contact"} link={"/contact"} special={true}></NavButton>
                </div>
            </header>
        )
    }
}
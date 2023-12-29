"use client"

import { useState, useEffect } from "react"
import { color, motion, useAnimation, useAnimationControls } from "framer-motion"

export default function Hamburger({navActive, setNavActive}) {

    const topBarControl = useAnimationControls()
    const bottomBarControl = useAnimationControls()

    useEffect(() => {
        if(!navActive) {
            topBarControl.start({y: 0, rotateZ: 0})
            bottomBarControl.start({y: 0, width: 22, rotateZ: 0})
        } else {
            topBarControl.start({y: 5, rotateZ: 45})
            bottomBarControl.start({y: -5, width: 28, rotateZ: -45})
        }
    }, [navActive])

    return (
        <div onClick={() => setNavActive(!navActive)} className="flex flex-col gap-[7px] justify-center w-[32px] h-[40px] cursor-pointer">
            <motion.div initial={{}} animate={topBarControl}  className={`w-[28px] ${navActive ? 'bg-[var(--turquoise)]' : 'bg-black'} h-[3px] rounded-md outline-none border-0`} />
            <motion.div initial={{}} animate={bottomBarControl} className={`w-[22px] z-10 ${navActive ? 'bg-[var(--turquoise)]' : 'bg-black'} h-[3px] rounded-md outline-none border-0`} />
        </div>
    )
}
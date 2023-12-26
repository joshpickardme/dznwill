"use client"

// Imports
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Typed from "typed.js";


// Components
import Header from "@/components/structure/Header"
import Main from "@/components/structure/Main"
import Footer from "@/components/structure/Footer"

// Icons
import { FaArrowDown } from "react-icons/fa6";
import { Tilt_Prism } from "next/font/google";




export default function Home() {

  const sleep = (time) => {
    return new Promise(resolve => setTimeout(resolve, time))
  }


  const skills = [
    {
      text: 'graphic design ',
      colour: 'ffffff'
    },
    {
      text: 'animation ',
      colour :'fffff'
    },
    {
      text: 'branding ',
      colour :'fffff'
    },
    {
      text: 'photography ',
      colour :'fffff'
    },
  
]
  const [skill, setSkill] = useState('graphic design  ')




  return (
    <Main>
      <Header></Header>
      <div className="flex min-h-screen justify-center items-center -mt-20 z-0 ">
        <h2 className="font-medium text-2xl md:text-4xl md:max-w-[680px] text-center md:leading-normal leading-normal">Good Morning! I'm <span className="font-semibold text-[var(--turquoise)]">Will</span> a <br/> freelance creative with unique <br/> skills in <motion.span className="font-semibold text-[var(--red)]">{skill}</motion.span>. </h2>
        <motion.div animate={{y: [0, 15, 0]}} transition={{duration: 2, ease: "easeInOut", repeat: Infinity}} className="absolute bottom-28"><FaArrowDown className="scale-[2]">
          </FaArrowDown>
        </motion.div>
      </div>
      <Footer></Footer>
    </Main>
  )
}

"use client"

// Components
import Main from "@/components/structure/Main"
import Header from "@/components/structure/Header"
import Footer from "@/components/structure/Footer"
import Client from "@/components/Client"






export default function about() {
    return (
        <Main>
          <Header></Header>
          <div className="flex flex-col md:flex-row min-h-screen justify-start mt-8 md:-mt-[105px] gap-2 md:justify-between md:gap-16 lg:gap-32 md:items-center z-0 ">
            <div className="flex flex-col md:items-start gap-2 md:w-2/3 lg:w-1/2">
                <h1 className="font-medium text-3xl">About Me...</h1>
                <p className="text-black md:text-xl 2xl:text-2xl">I’m <span className="font-semibold text-[var(--turquoise)]">Will</span> a freelance creative, with unique skill in <span className="font-semibold text-[var(--red)]">graphic design</span> . I enjoy Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sapien odio, ullamcorper ut lorem hendrerit. ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sapien odio, ullamcorper ut lorem hendrerit. ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sapien odio, ullamcorper ut lorem hendrerit. ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="flex items-center justify-center w-[248px] h-[320px] lg:w-[397px] lg:h-[502px] bg-[var(--red)]">
                <p className="text-white font-bold text-2xl">PORTRAIT</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-12 pb-32">
            <h1 className="font-medium text-3xl">Clients I've Worked For</h1>
            <div className="grid grid-cols-1 min-w-full sm:min-w-max md:grid-cols-2 xl:grid-cols-3 gap-8">
                <Client></Client>
                <Client></Client>
                <Client></Client>
                <Client></Client>
                <Client></Client>
                <Client></Client>
            </div>
          </div>
          <div className="flex flex-col items-center gap-12 pb-32">
            <h1 className="font-medium text-3xl">Testimonials</h1>
            <div className="grid grid-cols-1 min-w-full sm:min-w-max md:grid-cols-2 xl:grid-cols-3 gap-8">
                <Client></Client>
                <Client></Client>
                <Client></Client>
                <Client></Client>
                <Client></Client>
                <Client></Client>
            </div>
          </div>
          <Footer></Footer>
        </Main>
      )
}
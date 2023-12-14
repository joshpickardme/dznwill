// Imports


// Components
import Header from "@/components/structure/Header"
import Main from "@/components/structure/Main"




export default function Home() {
  return (
    <Main>
      <Header></Header>
      <div className="flex min-h-screen justify-center items-center -mt-24 ">
        <h2 className="font-medium text-2xl md:text-4xl md:max-w-[680px] text-center md:leading-normal leading-normal">Good Morning! I'm <span className="font-semibold text-[var(--turquoise)]">Will</span> a freelance creative with unique skills in <span className="font-semibold text-[var(--red)]">graphic design</span>.</h2>
      </div>
    </Main>
  )
}

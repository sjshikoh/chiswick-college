import Link from "next/link";
export default function Navbar() {
    return (
        
        <header className=" h-[85px] bg-yellow-200 drop-shadow-[1_0px_3px_rgba(117,195,16,0.8) ">
           <div className="flex flex-row items-center justify-between h-full px-4 sm:px-6 md:px-8 lg:mx-auto xl:px-4 max-w-7xl]">

            <div className="flex gap-2 items-center h-full px-4 text-[#52d493]">
            
            <h1 className="font-bold text-[24px] mx-auto my-20 px-4"> The Chiswick College</h1>
        </div>
        <nav className="h-[44.54] max-w-7xl">
            <ul className="flex h-full w-full justify-between items-center gap-[45px] text-[20px] font-medium text-[#52d493]">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/admissions">Admissions</Link>
            <Link href="/curriculum">Curriculum</Link>
            <Link href="/workWithUs">Work With Us</Link>
            <Link href="/contact">Contact Us</Link>
            </ul>
        </nav>
        </div>
        </header>
        
    )
}
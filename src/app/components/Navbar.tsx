'use client'
import Link from 'next/link'
import Image from 'next/image'
import BSALogo from '../images/hero/BSALogo'


const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80, // Adjust for the navbar height
      behavior: 'smooth',
    });
  }
};

const Navbar = () => {
  return (

    <div className="navbar bg-secondary shadow-lg fixed top-0 z-50  font-semibold opacity-100">

      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>

          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100  rounded-box w-52 gap-6 text-black">
          <li><button onClick={() => scrollToSection('manifesto')} className='text-l font-bold bg-clip-text'>Manifesto</button></li>
          <li><button onClick={() => scrollToSection('sponsors')} className='text-l font-bold bg-clip-text'>Sponsors</button></li>
          <li><button onClick={() => scrollToSection('panels')} className='text-l font-bold bg-clip-text'>Panels</button></li>
          <li><button onClick={() => scrollToSection('speakers')} className='text-l font-bold bg-clip-text'>Speakers</button></li>
          <li><button onClick={() => scrollToSection('agenda')} className='text-l font-bold bg-clip-text'>Agenda</button></li>
          <li><button onClick={() => scrollToSection('more')} className='text-l font-bold bg-clip-text'>More</button></li>
          </ul>
        </div>
            <Link href="/">
              <BSALogo  classname="w-full btn btn-ghost normal-case p-2" />
            </Link>
        </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white">
          <li><button onClick={() => scrollToSection('manifesto')} className='text-l font-bold bg-clip-text '>Manifesto</button></li>
          <li><button onClick={() => scrollToSection('sponsors')} className='text-l font-bold bg-clip-text '>Sponsors</button></li>
          <li><button onClick={() => scrollToSection('panels')} className='text-l font-bold bg-clip-text '>Panels</button></li>
          <li><button onClick={() => scrollToSection('speakers')} className='text-l font-bold bg-clip-text '>Speakers</button></li>
          <li><button onClick={() => scrollToSection('agenda')} className='text-l font-bold bg-clip-text '>Agenda</button></li>
          <li><button onClick={() => scrollToSection('more')} className='text-l font-bold bg-clip-text '>More</button></li> 
        </ul>
      </div>
      

      <div className="navbar-end  gap-1">
        <a
          className=' p-2 rounded-lg text-white bg-primary'
        >
          Conference
        </a>
        <Link href="/hackathon" className='p-2 hover:bg-blue-200 rounded-lg'>Hackathon</Link>

        <Link href="/register" className="btn ">Register</Link>
      </div>
    </div>
  )
}

export default Navbar

'use client'
import Link from 'next/link'
import Image from 'next/image'
import BSALogo from '../images/hero/BSALogo'




const Navbar = () => {
  return (

    <div className="navbar bg-secondary shadow-lg fixed top-0 z-50  font-semibold opacity-100">

      <div className="navbar-start">
      
          
            <Link href="/">
              <BSALogo  classname="w-full btn btn-ghost normal-case p-2" />
            </Link>
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

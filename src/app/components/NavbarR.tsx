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
      
      
      

    
    </div>
  )
}

export default Navbar

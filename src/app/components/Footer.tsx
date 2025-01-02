// src/components/Footer.tsx
import BSALogo from '../images/hero/BSALogo';
import { FaTelegramPlane, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center mb-4 md:mb-0">
          <span className="text-lg font-bold mb-2">
            Organized by:
          </span>
            <a href="https://bsaepfl.ch/" target="_blank" rel="noopener noreferrer" className="text-2xl">
                <BSALogo  classname="w-full btn btn-ghost normal-case" />
            </a>
        </div>
        <div className="flex flex-col items-center mb-4 md:mb-0">
          <span className="text-lg font-bold mb-2">
            Socials:
          </span>
          <div className="flex items-center space-x-4">
            <a href="https://t.me/+Yg2GqxoXDIIwYWJk" target="_blank" rel="noopener noreferrer" className="text-2xl">
              <FaTelegramPlane />
            </a>
            <a href="https://x.com/bsa_epfl" target="_blank" rel="noopener noreferrer" className="text-2xl">
              <FaTwitter />
            </a>
            <a href="mailto:bsa@epfl.ch" className="text-2xl">
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div className="text-center md:text-right">
          <span className="block text-lg font-bold mb-2">
            Developed by:
          </span>
          <ul className="list-none">
            <li>Loris</li>
            <li>Jules</li>
            <li>Guillaume</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

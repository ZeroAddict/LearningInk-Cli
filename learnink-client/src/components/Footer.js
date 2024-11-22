import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, } from 'react-icons/fa';
function Footer() {

    return (
      <footer className="bg-gray-200 py-8">
      <div className="container mx-auto px-4">
        <ul className="flex justify-center mb-4">
          <li className="mr-6">
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500" >
              
              <FaTwitter size={24} />
            </a>
          </li>
          <li className="mr-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500" >
             
              {/* <FaFcebook width={24} height={24} /> */}
            </a>
          </li>
          <li className="mr-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500" >
              
              <FaInstagram size={24} />
            </a>
          </li>
          <li>
            <a href="" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500" >
              
              <FaPinterestP size={24} />
            </a>
          </li>
        </ul>
        <p className="text-center text-gray-500">
          &copy; 2024 LearningInk. All rights reserved.
        </p>
      </div>
    </footer>
    );
  }
  
export default Footer;

// function Footer() {
//   return (
//     <footer>
//     2024 LearningInk  &copy; 
//     </footer>
//   );
// }

// export default Footer;
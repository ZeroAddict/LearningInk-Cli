import Link from 'next/link';
import styles from '../../public/styles/styles.module.css'
import Image from "next/image";
import '../app/globals.css';

export default function Header() {
  return (
    <div className='my-1'>
    <nav className={styles.nav}>
    <div className='navHdr'>
      <Link href="/">
        <Image src="/assets/images/learningInk01.png" alt="learningInk" width={100} height={33} />
      </Link>
      
    </div>
      {/* <nav> */}
      <ul>
        <li className='font-bold hover:underline'>
          <Link href="/_index" className='text-blue'>
            Home
          </Link>
        </li>
        <li className='hover:underline'>
          <Link href="/_about" >
            About
          </Link>
        </li>
        <li className='font-bold text-blue hover:underline text-blue'>
          <Link href="/gallery">
            Gallery
          </Link>
        </li>
        <li className='border-2 outline-gray text-1.5xl text-orange-600 bg-black hover:bg-white'>
          <Link href="/explore">
            Explore
          </Link>
        </li>
        <li>
          <Link href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
   </div>

  );
}

// export default Header;
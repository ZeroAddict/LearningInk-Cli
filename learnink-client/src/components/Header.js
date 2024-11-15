import Link from 'next/link';
import styles from '../../public/styles/styles.module.css'
import Image from "next/image";

export default function Header() {
  return (


    <nav className={styles.nav}>
    <div className='navHdr'>
      <Link href="/">
        <Image src="/assets/images/learningInk01.png" alt="learningInk" width={100} height={33} />
      </Link>
      
    </div>
      {/* <nav> */}
      <ul>
        <li>
          <Link href="/_index">
            Home
          </Link>
        </li>
        <li>
          <Link href="/_about">
            About
          </Link>
        </li>
        <li>
          <Link href="/gallery">
            Gallery
          </Link>
        </li>
        <li>
          <Link href="/partners">
            Partners
          </Link>
        </li>
        <li>
          <Link href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
   

  );
}

// export default Header;
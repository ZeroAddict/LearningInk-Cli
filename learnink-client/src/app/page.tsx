import Image from "next/image";
// import styles from "../../public/global.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
       <nav>
      <ul>
        <li>
          <Link href="/_index">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about">
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
        {/* <li>
          <Link href="/contact">
            Contact
          </Link>
        </li> */}
      </ul>
    </nav>
    </div>
  );
}

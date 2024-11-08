import Link from 'next/link';

function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
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
        <li>
          <Link href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
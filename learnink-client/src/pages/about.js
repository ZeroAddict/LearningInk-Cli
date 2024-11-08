import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../../public/styles/styles.css'; // Renamed to .module.css
import Link from 'next/link'; // Added for routing

function AboutPage() {
  return (
    <div className={styles.container}> // Added styles.container
      <Header />
      <main className={styles.main}> // Added styles.main
        <h1>About Us</h1>
        <p>Learn more about our team.</p>
        <Link href="/contact"> // Replaced button with Link
          <button className={styles.contactUs}>Contact Us</button>
        </Link>
      </main>
      <h3>Contact Us</h3>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button>Send</button>
      </form>
      <Footer />
    </div>
  );
}
export default AboutPage;
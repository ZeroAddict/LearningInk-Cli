import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../../public/styles/styles.module.css'; // Renamed to .module.css
import Link from 'next/link'; // Added for routing
import { useState } from 'react';

export default function AboutPage() {
  const [showContactForm, setShowContactForm] = useState(false);
  const handleContactClick = () => {
    //setShowContactForm(true); //for a single click of contactus
    setShowContactForm(!showContactForm)
  };

  return (
    <div className={styles}> 
    {/* styles.container flexes entire elements*/}
      <Header />
      <main className={styles}> 
        {/* // Added styles.main */}
        <h1>About Us</h1>
        <p>Learn more about our team.</p>
        {/* Replaced button with Link */}
          <button className={styles.contactUs} onClick={handleContactClick}>Contact Us</button>
        {/* to handle reclicking contactus button */}
        {showContactForm ? '' : ''}
        {
          showContactForm &&  (
            <div className={styles.contactus}>
      <h3>Contact Us</h3>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button>Send</button>
        </form>
      </div>
          )
        }
      </main>
      
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
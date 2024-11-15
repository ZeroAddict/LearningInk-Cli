import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../../public/styles/styles.module.css'; // Renamed to .module.css
import Link from 'next/link'; // Added for routing
import { useState } from 'react';

export default function AboutPage() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleContactClick = () => {
    //setShowContactForm(true); //for a single click of contactus
    setShowContactForm(!showContactForm)
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!name) newErrors.name = 'Name is required';
    //if (!phone) newErrors.phone = 'Phone is required';
    if (!email || !email.includes('@')) newErrors.email = 'Invalid email';
    if (!message) newErrors.message = 'Message is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Submit form data to endpoint
      fetch('/incoming/contactmessage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email,phone, message }),
      })
      // .then((res)=>res.send(body)) Try log message to console
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.error(err));
    }
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
          {/*{handleButtonClick && ()}*/}
          <button className={styles.contactBtn} onClick={handleContactClick}>{showContactForm ? 'Say Hello 👋' : 'Contact us'}</button>
        {/* to handle reclicking contactus button */}
        
        {
          showContactForm &&  (
            <div className={styles.contactus}>
              <h3>Contact Us </h3>
              <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} /> <br />{errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                <input type="tel" placeholder="Tel No" value={phone} onChange={(e)=>setPhone(e.target.value)} />{errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}<br />
                <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />{errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                <br />
                <textarea placeholder="Message" value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>{errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}
                <br />
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
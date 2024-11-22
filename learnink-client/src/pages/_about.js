import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../../public/styles/styles.module.css'; // Renamed to .module.css
import Link from 'next/link'; // Added for routing
import { useState } from 'react';
import RightPage from '../components/RightPage';
import stylesR from '../app/styles/rightpage/stylesR.module.css';


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
    <>
    <div className={styles.aboutpage}> 
      <Header />
      <main className={styles.main}> 
        {/* // Added styles.main */}
       <div className=''>
       <h1 className='text-white'>About Us</h1>
        <p className='text-white'>Learn more about our team.</p>
        <p className='inline-flex text-white py-10'>
        ### Virtual Environment Setup

To ensure that all dependencies are contained within the project, it's recommended to create and use a virtual environment. Here’s how to do it:

#### On Windows:
1. Create a virtual environment:
   ```bash
   python -m venv venv
   ```
2. Activate the virtual environment:
   ```bash
   venv\Scripts\activate
        </p>
        {/* Replaced button with Link */}
          {/*{handleButtonClick && ()}*/}
          <button className={styles.contactBtn} onClick={handleContactClick}>{showContactForm ? 'Say Hello 👋' : 'Contact us'}</button>
        {/* to handle reclicking contactus button */}
       </div>
        
        {/* <div className=''> */}
        {
          showContactForm &&  (
            <div className={styles.contactus}>
              <h3 className='py-2 text-center font-semibold'>Contact Us </h3>
              <form onSubmit={handleSubmit} className={styles.form}>
                <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} className='focus:outline-none focus:ring focus:border-blue-300 p-2;'/> <br />{errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                <input type="tel" placeholder="Tel No" value={phone} onChange={(e)=>setPhone(e.target.value)} className='focus:outline-none focus:ring focus:border-blue-300 p-2;'/>{errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}<br />
                <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} className='focus:outline-none focus:ring focus:border-blue-300 p-2;'/>{errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                <br />
                <textarea placeholder="Message" value={message} onChange={(e)=>setMessage(e.target.value)} className='focus:outline-none focus:ring p-2;'></textarea>{errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}
                <br />
                <button className='bg-black text-white py-3 px-3 rounded-lg hover:bg-[orange] hover:text-[teal] hover:ring-[green] hover:p-[10]'>Send</button>
              </form>
              <div className={stylesR.rightAbout}>
                <RightPage />
              </div>

            </div>
          )
        }          
        {/* </div> */}

        {/* <div className={stylesR.rightAbout}>
          <RightPage />
        </div> */}
      </main>
      

    </div>      
    <div className={styles.footer}>
        <Footer />
    </div>
  </>
  );
}
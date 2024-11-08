import Header from '../components/Header';
import Footer from '../components/Footer';

function AboutPage() {
  return (
    <div>
      <Header />
      <main>
        <h1>About Us</h1>
        <p>Learn more about our team.</p>
        <button className='contact-us' onClick={()=>{ContactPage()}}></button>
      </main>
      <Footer />
    </div>
  );
}

function ContactPage() {
    return (
      <div>
        <Header />
        <main>
          <h1>Contact Us</h1>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button>Send</button>
          </form>
        </main>
        <Footer />
      </div>
    );
  }
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../public/styles/global.css'

function GalleryPage() {
  return (
    <div>
      <Header />
      <main>
        <h1>Gallery</h1>
        <div className={styles.GalleryPage} /*script=""*/>
            <Image src="/" alt="" width height />
            <Image src="/" alt="" width height />
            <Image src="/" alt="" width height />
            <Image src="/" alt="" width height />
            <Image src="/" alt="" width height />
            <Image src="/" alt="" width height />
            <Image src="/" alt="" width height />
            <Image src="/" alt="" width height />
            <Image src="/" alt="" width height />
            <Image src="/" alt="" width height />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default GalleryPage;
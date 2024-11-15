import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../../public/styles/styles.module.css'
import Image from 'next/image';

function GalleryPage() {
  return (
    <div>
      {/* <Head>
        <link rel="stylesheet" href="/styles/styles.css" />
      </Head> */}
      <Header />
      <main>
        <h1>Gallery</h1>
        <div className={styles.GalleryPage} /*script=""*/>
            {/* <Image src="/" alt="" width height />
            <Image src="/" alt="" width height />
            <Image src="/" alt="" width height />
            <Image src="/" alt="" width height />
            <Image src="/" alt="" width height />
            <Image src="/" alt="" width height />
            <Image src="/" alt="" width height />
            <Image src="/" alt="" width height />
            <Image src="/" alt="" width height />
            <Image src="/" alt="" width height /> */}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default GalleryPage;
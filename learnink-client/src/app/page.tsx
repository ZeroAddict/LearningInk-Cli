import Image from "next/image";
// import styles from "../../public/global.css";
import Link from "next/link";
import styles from '../../public/styles/styles.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RightPage from '../components/RightPage';
import stylesR from '../app/styles/rightpage/stylesR.module.css';
import Cta from '../components/Cta';

export default function Home() {
  
  return (
     <div>
      <Header />
      <Cta />
      <div className={styles.container}>

        <div className={stylesR.bg}>
           {/* <RightPage/> */}
        </div>
       
      </div>
      <div className={styles.footer}>
        <Footer/>
      </div>
      

    </div>
  );
}

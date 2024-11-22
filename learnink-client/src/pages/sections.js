import Sections from '../components/Sections';
import styles from '../../public/styles/styles.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import '../app/globals.css';

export default function sectionsPage () {
    return (
        <div>
        <Header/>
        <Sections />
        <Footer/>
        </div>
    )
}
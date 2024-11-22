import React, { useState, useContext } from 'react';
import { login, AuthProvider, AuthContext } from '../contexts/AuthContext';
import { useRouter } from 'next/router';
import Header from './Header';
import Footer from './Footer';
import styles from '../../public/styles/styles.module.css';
import '../app/globals.css';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { login, user } = useContext(AuthContext);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      router.push('/profile');
    } catch (error) {
      setError(error.message);
    }
  };

  if (user) {
    return <div>Already logged in. Redirecting...</div>;
  }

  return (
    <>
    <div className={styles.log}>
      <Header />
      <div className='bg-rose-400 hover:bg-transparent w-[40vw] max-w-lg mx-auto h-[50vh] items-center mt-20 p-8 rounded-xl shadow-md' >
      <h1 className='text-3xl font-bold items-center hover:text-black text-center text-white mx-auto mb-4'>Login Page</h1>
      <form onSubmit={handleSubmit} className='border-2 p-5 hover:bg-gray'>
      <label className=" block  text-gray-700 text-sm mt-5 font-bold mb-2" for="email">
        Email:
      </label>
      <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className='mx-auto border-black w-full outline focus:outline-none focus:shadow-outline'
          />
      <label className=" block text-gray-700 text-sm mt-5 font-bold mb-2 w-full" for="email">
        Password:
      </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className='w-full mx-auto mb-5 outline focus:outline-none focus:shadow-outline'
          />
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button className={styles.signup} type="submit">Login</button>
      </form>
      </div>

    </div>
    <div className={styles.footer}>
        <Footer />
      </div>
  </>
  );
};

export default LoginPage;
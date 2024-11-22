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
    <div className={styles.log}>
      <Header />
      <div classsName={styles.login}>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button className='text-blue' type="submit">Login</button>
      </form>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default LoginPage;
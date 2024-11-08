import React, { useState } from 'react';
import styles from '../../public/styles/styles.css';
import Header from '../components/Header'
// import Head from 'next/head';

function HomeSignup() {
{/* <Head>
  <link rel="stylesheet" href="/styles/styles.css" />
</Head> */}
  const [showSignup, setShowSignup] = useState(false);
  const [signupType, setSignupType] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    // Organization fields
    orgName: '',
    orgType: '',
    orgDescription: '',
  });

  const handleGetStarted = () => {
    setShowSignup(true);
  };

  const handleSignupType = (type) => {
    setSignupType(type);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data to API or backend
    console.log(formData);
  };

  return (
    <> <Header/>
    <div className={styles.container}>
      <div className={styles.leftPage}>
        {showSignup ? (
          <div>
            {signupType === '' && (
              <>
                {/* <h2>Sign up as:</h2> */}
                <button
                  className={styles.signupButton}
                  onClick={() => handleSignupType('student')}
                >
                  Sign up as Student
                </button>
                <button
                  className={styles.signupButton}
                  onClick={() => handleSignupType('organisation')}
                >
                  Sign up as Organisation
                </button>
              </>
            )}
            {signupType === 'student' && (
              <form onSubmit={handleSubmit}>
                <h2>Student Sign-up</h2>
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <label>Password:</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <label>Confirm Password:</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <button type="submit">Sign up</button>
              </form>
            )}
            {signupType === 'organisation' && (
              <form onSubmit={handleSubmit}>
                <h2>Organisation Sign-up</h2>
                <label>Organisation Name:</label>
                <input
                  type="text"
                  name="orgName"
                  value={formData.orgName}
                  onChange={handleChange}
                />
                <label>Organisation Type:</label>
                <select
                  name="orgType"
                  value={formData.orgType}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="school">School</option>
                  <option value="university">University</option>
                  <option value="company">Company</option>
                </select>
                <label>Organisation Description:</label>
                <textarea
                  name="orgDescription"
                  value={formData.orgDescription}
                  onChange={handleChange}
                />
                <button type="submit">Sign up</button>
              </form>
            )}
          </div>
        ) : (
          <button className={styles.getStartedButton} onClick={handleGetStarted}>
            Get Started
          </button>
        )}
      </div>
      <div className={styles.rightPage}>
        {/* Right page content */}
      </div>
    </div>
    </>
  );
}

export default HomeSignup;
